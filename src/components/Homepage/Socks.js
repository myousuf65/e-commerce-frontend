import React, {useState, useEffect} from 'react';
import "../../styles/Homepage.css"
import SingleProduct from '../Products/SingleProduct'

function Socks(props) {

    const [socks, setSocks] = useState([])

    function handleFetch(){

        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)


        fetch('http://localhost:8080/findbycategory/Socks', {

        method: 'GET',
        headers: headers
    
        }).then((res) => {

            return res.json();
            })
            .then((data) => {
                data.map(product => {  
                    setSocks(oldArray => [...oldArray,<SingleProduct id={product.id} name={product.productName} id={product.id} desc={product.productDescription} price={"$"+product.productPrice} getInfo={getProductId} image={product.data} key={product.id} 
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
        <h2>Socks</h2>
        <div className='media-scroller'>
            {socks}
        </div>
    </div>
    );
}

export default Socks;