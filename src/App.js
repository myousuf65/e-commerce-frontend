import './App.css';
import UserRegistration from './components/Authentication/UserRegistration';
import UserLogin from './components/Authentication/UserLogin';
import {Routes, Route} from "react-router-dom"
import AddProduct from './components/Products/AddProduct';
import React,{useState, useEffect } from 'react';
import AllProducts from './components/Products/AllProducts';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import Homepage from './components/Homepage/Homepage';
import SellerProfie from './components/Selling/SellerProfie';
import Cart from './components/Cart/Cart';
import FAQPage from './components/FAQPage';
import SearchedProduct from './components/Products/SearchedProduct';
import UpdateProduct from './components/Products/UpdateProduct';
import Checkout from './components/Cart/Checkout';

function App() {

  const registration = ["Name", "Username", "Password", "Confirm Password"];
  const login = ["Username", "Password", "Confirm Password"]


  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path='/auth/register/' element={<UserRegistration fields={registration}/>} />
          <Route path='/auth/login' element={<UserLogin fields={login}/>} />
          <Route path='/seller/upload-product' element={<AddProduct/>}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/seller' element={<SellerProfie /> }/>
          <Route path='/cart' element={<Cart /> }/>
          <Route path='/faq' element={<FAQPage /> }/>
          <Route path='/search' element={<SearchedProduct /> }/>
          <Route path='/update' element={<UpdateProduct /> }/>
          <Route path='/checkout' element={<Checkout /> }/>
          
      </Routes>
    </div>

  );
}

export default App;
