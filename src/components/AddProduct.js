import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

function AddProduct({ closeModel, editProductid, setEditProduct }) {
  const [value, setValue] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    rating: "",
    productUrl: "",
  });
  const getProduct = async () => {
    const productDoc = doc(db, "products", editProductid);
    getDoc(productDoc).then((doc) => {
      setValue({
        name: doc.data().values.name,
        price: doc.data().values.price,
        category: doc.data().values.category,
        description: doc.data().values.description,
        rating: doc.data().values.rating,
        productUrl: doc.data().values.productUrl,
        description: doc.data().values.description,
      })
    });
  };
  useEffect(()=>{
    if(editProductid!=""){
      getProduct()
    }
  }, [])
  const userCollectionRef = collection(db, "products");
  const onSubmit = async (values, { resetForm }) => {
    console.log(values)
    if(editProductid!=""){
      const updateCollectionref=collection(db, "products", editProductid)
      console.log(updateCollectionref, "ffee")
     
      await updateDoc(updateCollectionref,{values})
    }
    else{
      await addDoc(userCollectionRef, { values });
    }
    closeModel(false);
  };



  const ValidateSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    price: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    rating: Yup.string().required("Required"),
    productUrl: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: value,
    validateOnBlur: true,
    onSubmit,
    validationSchema: ValidateSchema,
    enableReinitialize: true,
  });
  return (
    <div className=" popupBg ">
      <div
        className="form p-3 popupBoxShadow"
        style={{
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          position: "absolute",
          top: "50%",
          left: "50%",
          backgroundColor: "whitesmoke",
        }}
        id="form"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex justify-content-between">
            <h3 className="ms-3 ">{editProductid!=""?"Edit":"Add"} Product</h3>
            <span
              onClick={() => {
                closeModel(false);
                setEditProduct(false)
              }}
              type="button"
              className=" text-danger"
            >
              <i class="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
          <div className="row my-2 ">
            <div className="col-md-6 col-sm-12 ">
              <img className="m-2 "
                name="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXa9-z9S-9Tf_flriXWNQPvs6r50RiDQgtGg&usqp=CAU"
                alt=""
              ></img>
            </div>

            <div className="col-md-6 col-sm-12">
              <div>
                <label>Name</label>
                <br />
                <input
                  className="mb-2 w-100"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="formik-errors text-danger fontSize15">
                  {formik.errors.name}
                </div>
              ) : null}
              <div>
                <label>Price</label>
                <br />
                <input
                  className="mb-2 w-100"
                  type="number"
                  name="price"
                  placeholder="Enter Your Price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.price && formik.errors.price ? (
                <div className="formik-errors text-danger fontSize15">
                  {formik.errors.price}
                </div>
              ) : null}
              <div>
                <label>Rating</label>
                <br />
                <input
                  className="mb-2 w-100"
                  type="number"
                  name="rating"
                  placeholder="Enter Your Rating"
                  value={formik.values.rating}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.rating && formik.errors.rating ? (
                <div className="formik-errors text-danger fontSize15">
                  {formik.errors.rating}
                </div>
              ) : null}
              <div>
                <label>Category</label>
                <select
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-select mb-2 w-100"
                  name="category"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="mens">Mens</option>
                  <option value="womens">Womens</option>
                  <option value="kids">Kids</option>
                  <option value="footwear">Footwear</option>
                  <option value="essential">Essential</option>
                  <option value="trending">Trending</option>
                  <option value="winter">Winter</option>
                  <option value="bestseller">Best Seller</option>
                </select>
              </div>
              {formik.touched.category && formik.errors.category ? (
                <div className="formik-errors text-danger fontSize15">
                  {formik.errors.category}
                </div>
              ) : null}
            </div>
          </div>
          <hr />
          <div className="m-1">
            <label>Product Url</label>
            <br />
            <input
              className="mb-2 w-100 p-1"
              type="text"
              name="productUrl"
              placeholder="Enter Your Name"
              value={formik.values.productUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.productUrl && formik.errors.productUrl ? (
            <div className="formik-errors text-danger fontSize15">
              {formik.errors.productUrl}
            </div>
          ) : null}

          <div className="m-1">
            <label>Product Description</label>
            <input
              className="w-100 p-1"
              type="text"
              name="description"
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.description && formik.errors.description ? (
            <div className="formik-errors text-danger fontSize15">
              {formik.errors.description}
            </div>
          ) : null}
          <button type="submit" className="btn btn-primary w-100">
            Add New
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
