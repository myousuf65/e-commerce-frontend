import React, {useState} from 'react';
import '../../styles/Registration.css'

function NewProduct(props) {


    const [success, setSuccess] = React.useState(false)
    const [unsuccess, setUnsuccess] = React.useState(false)
    let username = window.localStorage.getItem('username')

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    
    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleDescChange(event){
        setDesc(event.target.value)
    }

    function handlePriceChange(event){
        setPrice(event.target.value)
    }

    function handleCategoryChange(event){
        setCategory(event.target.value)
    }

    return (
        <div className='container'>
            <h1>Upload Product</h1>
            <div className='sub-container'>
                <input placeholder='Product Name' id="name" onChange={handleNameChange}/>
                <input placeholder='Product Description' id='desc' onChange={handleDescChange}/>
                <input placeholder='Product Price' type="number" id='price' onChange={handlePriceChange}/>
                <input placeholder='Product Category' type="text" id='category' onChange={handleCategoryChange}/>
                
                <input type="file" id='photo'/>

                <button onClick={submitProduct} > Upload Product</button>
            </div>

            { success && (
                <div id='success' >
                    <img src="https://static.thenounproject.com/png/801900-200.png" alt='done' />
                    Sucessfully Uploaded the Product
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
        data.append('file', photo.files[0])
        data.append('name', name)
        data.append('desc' , desc)
        data.append('price', price)
        data.append('category', category)
        console.log(category)
        data.append('username', username)

        fetch('http://localhost:8080/new', {

        method: 'POST',
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

export default NewProduct;