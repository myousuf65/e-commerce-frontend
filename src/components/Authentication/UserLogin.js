import React,{useState, useHistory} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Registration.css'



function UserLogin(props) {

    const [success, setSuccess] = React.useState(false)
    const [unsuccess, setUnsuccess] = React.useState(false)

    const InputArray = props.fields.map(field => {
        return <input placeholder= {field} key={field} id={field}/>
    })
    
    function login(){

        let username = document.getElementById("Username").value;
        let password = document.getElementById("Password").value;
        let cpassword = document.getElementById("Confirm Password").value;
    
        window.localStorage.setItem("username", username)
        if(cpassword === password  && username.length>0 && password.length>0 ){
    
            let user = {username, password}
            console.log(user);
    
        fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then(resp => {
                resp.text().then(function (text){
    
                if(resp.status === 401){

                    window.localStorage.setItem("token", "")
                    window.localStorage.setItem("username", "")
                    setSuccess(false)
                    setUnsuccess(true)
                    setTimeout(function(){
                        window.location.reload();
                     }, 1000);
                     window.localStorage.setItem('cart', "")

                }else if (resp.status === 200){
                    setUnsuccess(false)
                    setSuccess(true)
                    window.localStorage.setItem("token", text)
                    window.location.href = "/"         
                    window.localStorage.setItem('cart', "")
                    
                }
            })
        })
        }
    
        username ="" 
        password = "" 
        cpassword = ""
    
        document.getElementById("Username").value = ""
        document.getElementById("Password").value = ""
        document.getElementById("Confirm Password").value = ""

        console.log(props.tk)
    }


    return (
        <div className='container'>
            <h1>User Login Page</h1>
            <div className='sub-container'>
                {InputArray}
                <div className='cont'>
                    <button type="submit" onClick={login}>Login</button>
                    <button type="submit" onClick={()=> window.location.href = "/auth/register"}>Not A User</button>
                </div>
            </div>

            { success && (
                <div id='success' >
                    <img src="https://static.thenounproject.com/png/801900-200.png" alt='done' />
                    Sucessfully Logged In
                </div>
                
                ) }

            { unsuccess && (
            <div id='unsuccess' >
                <img src="https://static.thenounproject.com/png/5484560-200.png" alt='done' />
                Failed to Login
            </div>
            
            ) }
            
        </div>
    );
}
export default UserLogin;