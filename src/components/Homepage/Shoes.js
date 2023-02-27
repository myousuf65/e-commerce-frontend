import React, {useState, useEffect} from 'react';
import "../../styles/Homepage.css"
import SingleProduct from '../Products/SingleProduct'


function Shoes(props) {
    const [shoes, setShoes] = useState([])

    function handleFetch(){

        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)


        fetch('http://localhost:8080/findbycategory/Shoes', {

        method: 'GET',
        headers: headers
    
        }).then((res) => {

            return res.json();
            })
            .then((data) => {
                data.map(product => {
                    
                    while(shoes.length > 0) {
                        shoes.pop();
                    }

                    setShoes(oldArray => [...oldArray,<SingleProduct name={product.productName} id={product.id} desc={product.productDescription} price={"$"+product.productPrice} getInfo={getProductId} image={product.data} key={product.id} 
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
        <h2>Shoes</h2>
        <div className='media-scroller'>
            {shoes}
        </div>
    </div>
    );
}

export default Shoes;