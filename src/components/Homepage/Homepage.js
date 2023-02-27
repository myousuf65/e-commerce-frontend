import React,{useState, useEffect} from 'react'
import HoodiesNSweatshirts from './HoodiesNSweatshirts'
import Jeans from './Jeans'
import Shirts from './Shirts'
import Shoes from './Shoes'
import Socks from './Socks'


export default function Homepage() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if(!(token === null) && token.length >0 ){
      setLoggedIn(true)
    }
  },[])
  

  function getId(id){
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    console.log("type:" + typeof(cart))
    console.log(cart)
    cart.push(id)
    console.log(cart)
    window.localStorage.setItem('cart',JSON.stringify(cart))
  }

  return (
    <div>
        {loggedIn && (
          <>
          <h1 style={{textAlign: "center", margin: "20px"}}>Homepage</h1>

            <Jeans getId={getId}/>
            <Socks getId={getId}  />
            <Shirts getId={getId} />
            <Shoes getId={getId} />
            <HoodiesNSweatshirts getId={getId} /> 
          </>
          )}
    </div>
  )
}
