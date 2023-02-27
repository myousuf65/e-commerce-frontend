import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import incognito from "../images/incognito.png"
import user from "../images/user.png"
import search from "../images/search-icon.png"
import SearchedProduct from './Products/SearchedProduct';

function Navbar(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [guest, setGuest] = useState(true)

    const username = window.localStorage.getItem('username')

    useEffect(() => {
    if(username === null || username.length === 0){
        setLoggedIn(false)
        setGuest(true)
    }else{
        setLoggedIn(true)
        setGuest(false)
    }
    },[])

    

    return (
        <div className='nav--container'>

            <div className='nav--title' onClick={()=> window.location.href = "/"}>
                <h1>H3 Tech Group</h1>
            </div>

            <div className='nav--pages'>
                <div className='page' onClick={()=> window.location.href = "/all-products"}>All Products</div>
                <div className='page' onClick={()=> window.location.href = "/about-us"}>About Us</div>
                <div className='page'onClick={()=> window.location.href = "/cart"}>Browse Cart</div>
                <div className='page'onClick={()=> window.location.href = "/faq"}>Contact Us</div>
                <div className='page'onClick={()=> {
                    window.location.href = "/faq/#FAQ"
                    }}>FAQ</div>
            </div>

            <div className='nav--search'>
                <input placeholder='Search by Name' name='search-product' id='search-product'/>
                <div className='search--icon'>
                    <img src={search} alt="search-icon" onClick={()=> {
                        
                        let item = document.getElementById('search-product').value
                        if(item.length <= 0){
                            return
                        }else{
                            window.localStorage.setItem('search-product', item)
                            window.location.href = "/search"
                        }
                        
                    }}/>
                </div>
            </div>

            {guest && (
            <div className='nav--login' onClick={() => window.location.href = "/auth/login"}>
                <div className='login--icon'>
                    <img src={incognito} />
                </div>

                <div className='login--label'>
                    Guest
                </div>
            </div>

            )}

            {loggedIn && (
            <div className='nav--login' onClick={() => window.location.href = "/seller"}>
                <div className='login--icon'>
                    <img src={user} />
                </div>

                <div className='login--label'>
                    {username}
                </div>
            </div>

            )}

        </div>
    );
}

export default Navbar;