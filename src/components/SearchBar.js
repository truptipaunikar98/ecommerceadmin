import React, { useState } from 'react'
import AddProduct from './AddProduct'


function SearchBar({editProduct, editProductid, setEditProduct}) {
    const [addProduct, setAddProduct]= useState(false)
   

  return (
    <div className='row m-3'>
      <div className='col-md-8 col-sm-12 mt-2'>
         <input className='form-control' placeholder='Search'/>
      </div>
      <div className='col-md-2 col-sm-6'>
         <button className='btn btn-primary'>Filter</button>
      </div>
      <div className='col-md-2 col-sm-6'>
        <button className='btn btn-info'
          onClick={() => {
            setAddProduct(true);
          }} 
        >Add New</button>
      </div>
     { (addProduct || editProduct) &&  <AddProduct editProductid={editProductid} setEditProduct={setEditProduct} closeModel={setAddProduct}/>}
    </div>
  )
}

export default SearchBar
