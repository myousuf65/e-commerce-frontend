import React, {useState, useEffect} from 'react';
import "../../styles/Homepage.css"
import SingleProduct from '../Products/SingleProduct'

function HoodiesNSweatshirts(props) {
    const [hoodies, setHoodies] = useState([])

    function handleFetch(){

        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)


        fetch('http://localhost:8080/findbycategory/Hoodies', {

        method: 'GET',
        headers: headers
    
        }).then((res) => {

            return res.json();
            })
            .then((data) => {
                data.map(product => {
                    
                    while(hoodies.length > 0) {
                        hoodies.pop();
                    }

                    setHoodies(oldArray => [...oldArray,<SingleProduct id={product.id} name={product.productName} desc={product.productDescription} price={"$"+product.productPrice} getInfo={getProductId} image={product.data} key={product.id} 
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
        <h2>Hoodies</h2>
        <div className='media-scroller'>
            {hoodies}
        </div>
    </div>
    );
}

export default HoodiesNSweatshirts;