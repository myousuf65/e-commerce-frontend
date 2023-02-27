import React,{useState, useEffect} from 'react';
import SingleComponent from '../AboutUs/AboutComponent';
import SingleProduct from './SingleProduct';

function SearchedProduct(props) {

    const [cart, setCart] = useState(()=>{

        let me  = window.localStorage.getItem('cart')

        if(me == null){
            return []
        }else if(me.length === 0){
            return []
        }else return JSON.parse(me)
        
    })

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    

    function getInfo(id){
        setCart(oldArray => [...oldArray, id])
    }

    let searchProduct = window.localStorage.getItem('search-product');

    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)


        fetch('http://localhost:8080/findbyname/'+searchProduct, {

        method: 'GET',
        headers: headers
    
        }).then((res) => {
            return res.json();
            })
            .then((data) => {
                console.log(data);
                setDisplayProduct(<SingleProduct getInfo={getInfo} image={data.data} name={data.productName} price={data.productprice} desc={data.productDescription} id={data.id}/>)
            })
        },[])


    return (
        <div>
            <h1 style={{textAlign:"center", margin: "20px"}}>Search Result:</h1>
            <div style={{display:"flex", justifyContent : "center"}}>{displayProduct}</div>
        </div>
    );
}

export default SearchedProduct;