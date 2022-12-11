import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
const Product = () => {
  return (
    <>
    <Navbar/>
    <h1>Product</h1>
    <hr/>
    <NavLink to="/product/1/999">Product 1</NavLink>
    </>
  )
}

export default Product;