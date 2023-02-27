import React,{useEffect, useState} from 'react';
import "../../styles/SingleProduct.css"

function SingleProduct(props) {

    const [addedToCart, setAddedToCart] = useState(false)
    const [notAddedToCart, setNotAddedToCart] = useState(true)


    function handleClick(){
        setAddedToCart(true)
        setNotAddedToCart(false)
        props.getInfo(props.id)
    }
   
    return (
        <div className='product--container'>

            <div id="im">
                <img src={`data:image/png;base64,${props.image}`} alt="animage"/>
            </div>

            <div className='sub-container1'>
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
            </div>

            <div className='sub-container2'>
                <p>{props.desc}</p>
            </div>


            {notAddedToCart && <button className='button' id='buy-button' onClick={handleClick}>Buy Item</button>}

            {addedToCart && <button className='redButton' id='buy-button' onClick={handleClick}>Added To Cart</button>}
            

        </div>
    );


}

export default SingleProduct; 