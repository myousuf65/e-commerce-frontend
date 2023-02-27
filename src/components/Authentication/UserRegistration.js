
import React from 'react';
import '../../styles/Registration.css'
function UserRegistration(props) {

    const [success, setSuccess] = React.useState(false)
    const [unsuccess, setUnsuccess] = React.useState(false)

    const InputArray = props.fields.map(field => {
        return <input placeholder= {field} key={field} id={field}/>
    })

    function newUser(){
        let name = document.getElementById("Name").value;
        let username = document.getElementById("Username").value;
        let password = document.getElementById("Password").value;
        let cpassword = document.getElementById("Confirm Password").value;
    
    
        if(cpassword === password && name.length>0 && username.length>0 && password.length>0 ){
    
            let user = {username, password}
            console.log(user);
    
        fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then(resp => {
                resp.text().then(function (text){
                if(text === "username is taken"){
                    
                    setSuccess(false)
                    setUnsuccess(true)
                }else{
                    setUnsuccess(false)
                    setSuccess(true)
                    window.location.href = "/auth/login"
                }
            })
        })
        }
    
        name =""
        username ="" 
        password = "" 
        cpassword = ""
    
        document.getElementById("Name").value = ""
        document.getElementById("Username").value = ""
        document.getElementById("Password").value = ""
        document.getElementById("Confirm Password").value = ""
        
    }

    return (
        <div className='container'>
            <h1>User Registeration Page</h1>
            <div className='sub-container'>
                {InputArray}
                <div className='cont'><button type="submit" onClick={newUser}>Register</button></div>
            </div>

            { success && (
                <div id='success' >
                    <img src="https://static.thenounproject.com/png/801900-200.png" alt='done' />
                    Successfully registered your account 
                </div>
                
                ) }

            { unsuccess && (
            <div id='unsuccess' >
                <img src="https://static.thenounproject.com/png/5484560-200.png" alt='done' />
                This Username is taken ... Try a different one !!
            </div>
            
            ) }
        </div>
    );
}



export default UserRegistration;