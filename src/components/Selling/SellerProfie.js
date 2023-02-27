import React,{useState} from 'react';
import "../../styles/Registration.css"
import EditableProduct from '../Products/EditableProduct';


function SellerProfie(props) {
    let username = window.localStorage.getItem('username')
    const [items, setItems] = useState([])  

    window.onload = handleFetch

    function refresh() {
        window.location.reload()
    }
    
    function handleFetch(){

        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)

        fetch('http://localhost:8080/findbyusername/'+username, {

        method: 'GET',
        headers: headers,
    
        }).then((res) => {
            return res.json();
            })
            .then((data) => {
                data.map(product => {
                    
                    while(items.length > 0) {
                        items.pop();
                    }
                    setItems(oldArray => [...oldArray,<EditableProduct id={product.id} name={product.productName} desc={product.productDescription} price={product.productPrice} image={product.data} key={product.id} refresh={refresh}
                    />] );
            })
            })
    }

    return (
        <div className="container">

            <div style={{display:"flex", alignItems: "center"}}>
                <h1 style={{textAlign:"center", margin:"0px 20px"}}>@{username}</h1>
                
                <button className='add-product--button' onClick={()=>{
                    window.localStorage.setItem('username', "")
                    window.location.href = "/"
                    
                }}>Log Out</button>
            </div>


            <div className='all-products-container'>
                {items}
            </div>

            <button className='add-product--button' onClick={()=> window.location.href = "seller/upload-product"} >Add Product</button>

        </div>
    );
}

export default SellerProfie;