import React,{useState, useEffect} from 'react'
import SingleProduct from './SingleProduct';


function AllProducts() {


    const [products, setProducts] = useState([])

    const [cart, setCart] = useState(()=>{

        let me  = window.localStorage.getItem('cart')
        console.log("me"+me)
        if(me == null){
            return []
        }else if(me.length === 0){
            return []
        }else return JSON.parse(me)
        
    })
        

    function handleFetch(){

        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)

        fetch('http://localhost:8080/download', {

        method: 'GET',
        headers: headers,
    
        }).then((res) => {
            return res.json();
            })
            .then((data) => {
                data.map(product => {
                    
                    while(products.length > 0) {
                        products.pop();
                    }
                    
                    return setProducts(oldArray => [...oldArray,<SingleProduct name={product.productName} id={product.id} desc={product.productDescription} price={"$"+product.productPrice} getInfo={getInfo} image={product.data} key={product.id} 
                    />] );
            })
            })
    }

    useEffect(() => {
        handleFetch()
        window.localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    

    function getInfo(id){
        setCart(oldArray => [...oldArray, id])
        console.log(id)
    }

  return (
    <div>

        <h1 style={{textAlign: "center", margin: "20px"}}>All Products</h1>
        <div className='all-products-container'>
            {products}
        </div>
        
    </div>
  )
}



export default AllProducts
