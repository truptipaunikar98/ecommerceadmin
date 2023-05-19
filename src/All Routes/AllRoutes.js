import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "../css/allroutes.css"
import Home from '../pages/Home'
import AllProducts from '../pages/AllProducts'
import WomensCol from '../pages/WomensCol'
import MensCol from '../pages/MensCol'
import KidsCol from '../pages/KidsCol'
import WinterCol from '../pages/WinterCol'
import TrendingCol from '../pages/TrendingCol'
import FootwearCol from '../pages/FootwearCol'
import EssentialCol from '../pages/EssentialCol'
import BestSellerCol from '../pages/BestSellerCol'
import Orders from '../pages/Orders'
import User from '../pages/User'
function AllRoutes() {
  return (
    <div className='allroutes'>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/allProducts" element={<AllProducts/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/mensCol" element={<MensCol/>}/>
        <Route path="/womensCol" element={<WomensCol/>}/>
        <Route path="/kidsCol" element={<KidsCol/>}/>
        <Route path="/winterCol" element={<WinterCol/>}/>
        <Route path="/footwearCol" element={<FootwearCol/>}/>
        <Route path="/essentialCol" element={<EssentialCol/>}/>
        <Route path="/trendingCol" element={<TrendingCol/>}/>
        <Route path="/bestsellerCol" element={<BestSellerCol/>}/>
    </Routes>
    </div>
  )
}

export default AllRoutes