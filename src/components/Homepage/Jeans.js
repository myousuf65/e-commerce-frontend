import React,{useEffect, useState} from 'react'
import "../../styles/Homepage.css"
import SingleProduct from '../Products/SingleProduct'

export default function Jeans(props) {

    const [jeans, setJeans] = useState([])

    function handleFetch(){
        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)


        fetch('http://localhost:8080/findbycategory/Jeans', {

        method: 'GET',
        headers: headers
    
        }).then((res) => {
            return res.json();
            })
            .then((data) => {
                data.map(product => {
                    
                    while(jeans.length > 0) {
                        jeans.pop();
                    }
                    setJeans(oldArray => [...oldArray,<SingleProduct id={product.id} name={product.productName} desc={product.productDescription} price={"$"+product.productPrice} getInfo={getProductId} image={product.data} key={product.id} 
                    />] );
            })
            })
    }


    useEffect(() => {
        handleFetch()
    },[])

    function getProductId(id){
        props.getId(id)
    }

  return (

    <div className='jeans--container'>
        <h2>Jeans</h2>
        <div className='media-scroller'>
            {jeans}
        </div>
    </div>
  )
}
