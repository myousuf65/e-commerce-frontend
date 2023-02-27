import React,{useEffect} from 'react';
import "../../styles/SingleProduct.css"

function EditableProduct(props) {

    function handleUpdate(){
        let product = {id: props.id, name: props.name, description: props.desc, price: props.price, image: props.image}
        window.localStorage.setItem('update-product', JSON.stringify(product))
        window.location.href = "/update"
    }

    function handleDelete(){
        let token = window.localStorage.getItem('token')
        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)
        fetch('http://localhost:8080/deletebyid/'+props.id, {

        method: 'DELETE',
        headers: headers,
    
        })
        props.refresh();
    }
   
    return (
        <div className='product--container'>

            <div id="im">
                <img src={`data:image/png;base64,${props.image}`} alt="animage"/>
            </div>

            <div className='sub-container1'>
                <h2>{props.name}</h2>
                <h3>${props.price}</h3>
            </div>

            <div className='sub-container2'>
                <p>{props.desc}</p>
            </div>

            <button className='button update' id='update-button' onClick={handleUpdate}>Update Item</button>
            <button className='button delete' id='delete-button' onClick={handleDelete}>Delete Item</button>



        </div>
    );


}

export default EditableProduct;