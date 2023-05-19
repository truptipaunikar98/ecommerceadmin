import React, { useEffect, useState } from 'react'
import List from '../components/List'
import SearchSocialBar from '../components/SearchSocialBar'
import SearchBar from '../components/SearchBar'
import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

function WomensCol() {
  const [editProductid, setEditProductid]= useState("")
  const [editProduct, setEditProduct]= useState(false)

    const [products, setProducts]=useState([])
    const userCollectionRef = collection(db, "products");
    const getProducts = async () => {
      const data = await getDocs(userCollectionRef);
   
    let filteredArray=data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((v,i)=>{
        return(
           v.values.category=="womens"
        )
    })
       setProducts(filteredArray);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    useEffect(()=>{
      getProducts()
    },[])

    const handleDelete= async(id)=>{
      if(window.confirm("are you sure you want to delete the record")==true){
        const productDoc = doc(db, "products", id)
        await deleteDoc(productDoc)
        getProducts()
      }
      else{
        alert("You dont want to Delete...")
      }
    }


      const listItems=[
        "Sr No", "Name", "Category", "Price", "Rating", "Description",
         "Action",
      ]
  return (
    <div>
     <SearchBar editProduct={editProduct} editProductid={editProductid} setEditProduct={setEditProduct}/>
      <List listItems={listItems} products={products} setEditProductid={setEditProductid} setEditProduct={setEditProduct} handleDelete={handleDelete}/>
  </div>
  )
}

export default WomensCol
