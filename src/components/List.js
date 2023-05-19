import React, { useState } from "react";
import AddProduct from "./AddProduct";

function List({ listItems, products, handleDelete, setEditProduct, setEditProductid}) {
  return (
    <div className="table ">
      <table className="table table-striped borderRadius12">
        <thead>
          <tr>
            {listItems.map((v) => {
              return <th scope="col">{v}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {products?.map((v, i) => {
            return (
              <tr>
                <th scope="col">{i + 1}</th>
                <th scope="col">{v.values.name}</th>
                <th scope="col">{v.values.category}</th>
                <th scope="col">{v.values.price}</th>
                <th scope="col">{v.values.rating}</th>
                <th scope="col">{v.values.description}</th>
                <th scope="col">
                  <i onClick={()=>{setEditProduct(true);setEditProductid(v.id)}} className="fa-solid fa-pen-to-square mx-1"></i>
                  <i onClick={()=>handleDelete(v.id)} className="fa-solid fa-trash mx-1"></i>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
