import React,{useEffect} from 'react';
import "../../styles/SingleProduct.css"

function CartProduct(props) {

    

    function handleClick(){
        props.deleteItem(props.im)
    }
   
    return (
        <div className='cartproduct--container'>

            <div id="cart--im">
                <img src={`data:image/png;base64,${props.img}`} alt="animage"/>
            </div>

            <div className='cart--sub-container1'>
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
                <button onClick={handleClick}>Remove From Cart</button>
            </div>

        </div>
    );


}

export default CartProduct;