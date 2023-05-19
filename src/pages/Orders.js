import React from 'react'

function Orders() {
    
  return (
    <div>
     <div className="table ">
      <table className="table table-striped borderRadius12">
        <thead>
          <tr>
           
               <th scope="col">Sr No:</th>
               <th scope="col">product Name</th>
               <th scope="col">Category</th>
               <th scope="col">Price</th>
               <th scope="col">Description</th>
               <th scope="col">User Id</th>
               <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          
              <tr>
                <th scope="col">1</th>
                <th scope="col">T-shirt</th>
                <th scope="col">Mens</th>
                <th scope="col">500</th>
                <th scope="col">cotton shirt</th>
                <th scope="col">1234567891</th>
                <th scope="col" className='d-flex'>
                    <p className='statusCircle  bg-dark'></p>
                    <p className='statusCircle bg-dark'></p>
                    <p className='statusCircle bg-dark'></p>
                </th>
              </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Orders
