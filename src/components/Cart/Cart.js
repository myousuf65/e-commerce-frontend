import React,{useState, useEffect} from 'react';
import "../../styles/cart.css"
import CartProduct from '../Products/CartProduct';


function Cart(props) {

    const [cartProducts, setCartProducts] = useState([])
    let me;
    const [totalPrice, setTotalPrice] = useState("")

    const [cart, setCart] = useState(()=>{
        let me  = window.localStorage.getItem('cart')
        console.log("me"+me)
        if(me == null){
            return []
        }else if(me.length === 0){
            return []
        }else return JSON.parse(me)
    })

    function deleteItem(id){
        
        for(var i=0 ; i<cart.length; i++){
    
            if(cart[i] === id){
                cart.splice(i, 1)
                console.log("popped")
            } 
        }

        window.localStorage.setItem('cart', JSON.stringify(cart))
        window.location.reload()
    }


    useEffect(()=>{

        cart.map((element)=>{

            let token = window.localStorage.getItem('token')
            let headers = new Headers();
            headers.set('Authorization', 'Bearer ' + token)
    
            fetch('http://localhost:8080/findbyid/'+element, {
    
            method: 'GET',
            headers: headers,
        
            }).then((res) => {
                return res.json();
                })
                .then((data) => {

                    console.log(data.id);

                    setTotalPrice((oldprice) => parseInt (oldprice + Math.round(data.productPrice)))
                    setCartProducts(oldArray => [...oldArray, <CartProduct im={data.id} name={data.productName} price={data.productPrice} img={data.data} deleteItem={deleteItem}/>] )

                })
        })

    },[cart])    

    
    return (

        <div className='cart--motherContainer'>
            <h1 style={{textAlign:"left", margin: "20px"}}>Cart</h1>
            <div className='cart--sub'>
                {cartProducts}
            </div>
            
            <h3 style={{textAlign:"center", margin: "20px"}} >Total Price : ${totalPrice}
            </h3>

            <button onClick={() =>{
                if(totalPrice === 0) {
                    console.log(totalPrice)
                    alert("The Cart is Empty!!")
                    return
                }
                window.localStorage.setItem('cart', "")
                window.location.href = "/checkout"
            }}
            style={{width:"100px", fontSize:"18px", textAlign:"center"}} className='button'>Checkout</button>
        </div>
    );
}

export default Cart;