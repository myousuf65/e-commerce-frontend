import React from 'react';


function Checkout(props) {

    window.localStorage.setItem('cart', "")

    return (
        <div className='checkout--container' style={{display: "flex", justifyContent: "center", margin :"30%"}}>
            <h2 style={{textAlign : "center"}}>Thank you for Shopping at H3 Tech Group,{<br></br>} {window.localStorage.getItem('username')}</h2>
        </div>
    );
}

export default Checkout;