import React,{useState, useEffect} from 'react';
import "../../styles/Homepage.css"
import SingleProduct from '../Products/SingleProduct'

function Shirts(props) {
    const [shirts, setShirts] = useState([])

    function handleFetch(){

        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)


        fetch('http://localhost:8080/findbycategory/Shirts', {

        method: 'GET',
        headers: headers
    
        }).then((res) => {

            return res.json();
            })
            .then((data) => {
                data.map(product => {
                    
                    while(shirts.length > 0) {
                        shirts.pop();
                    }

                    setShirts(oldArray => [...oldArray,<SingleProduct id={product.id} name={product.productName} desc={product.productDescription} price={"$"+product.productPrice} getInfo={getProductId} image={product.data} key={product.id} 
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
        <h2>Shirts</h2>
        <div className='media-scroller'>
            {shirts}
        </div>
    </div>
    );
}

export default Shirts;