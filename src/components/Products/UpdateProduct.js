import React,{useState} from 'react';

function UpdateProduct(props) {

    const [success, setSuccess] = React.useState(false)
    const [unsuccess, setUnsuccess] = React.useState(false)
    let username = window.localStorage.getItem('username')



    let product = JSON.parse(window.localStorage.getItem('update-product'))

    const [name, setName] = useState(product.name)
    const [desc, setDesc] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    
    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleDescChange(event){
        setDesc(event.target.value)
    }

    function handlePriceChange(event){
        setPrice(event.target.value)
    }


    return (
        <div className='container'>
        <h1>Update Product</h1>
        <div style={{border: "1px solid black", borderRadius : "20px", padding : "20px"}} className='sub-container' id='update-product'>
            <img style={{width:"200px", height: "200", objectFit : "cover", border : "1px solid black", borderRadius : "20px" , padding: "5px 10px"}}  src={`data:image/png;base64,${product.image}`} alt="phots"/>
            <input placeholder='Product Name' id="name" value={name} onChange={handleNameChange}/>
            <input placeholder='Product Description' id='desc' value={desc} onChange={handleDescChange}/>
            <input placeholder='Product Price' type="float" id='price' value={price} onChange={handlePriceChange}/>

            <button style={{margin : "20px", fontSize: "17px"}} className='button' onClick={submitProduct} > Upload Product</button>
        </div>

        { success && (

            <div id='success' >
                <img src="https://static.thenounproject.com/png/801900-200.png" alt='done' />
                Sucessfully Updated the Product
            </div>
            
            ) }

        { unsuccess && (
        <div id='unsuccess' >
            <img src="https://static.thenounproject.com/png/5484560-200.png" alt='done' />
            Upload Unsuccessful ... Try again
        </div>
        
        ) }
    </div>
    );

    function submitProduct(){

        const photo = document.getElementById('photo')

        let token = window.localStorage.getItem('token')

        let headers = new Headers();
        headers.set('Authorization', 'Bearer ' + token)

        var data = new FormData()
        data.append('name', name)
        data.append('desc' , desc)
        data.append('price', parseFloat(price))

        fetch('http://localhost:8080/update/'+product.id, {

        method: 'PUT',
        headers: headers,
        body: data

        }).then(resp => {
            resp.text().then(function (text){

            console.log(resp.status);
            
            if(resp.status !== 200){

                setSuccess(false)
                setUnsuccess(true)
                
            }else if (resp.status == 200){
                
                setUnsuccess(false)
                setSuccess(true)
                
            }
        })
    })
    }
    
}

export default UpdateProduct;