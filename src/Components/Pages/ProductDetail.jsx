import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function ProductDetail(){

let {productID}=useParams()
//console.log(productID)
const [product,setProduct]=useState({});

useEffect(() => {
    async function fetchData() {
      await axios.get(`http://localhost:3003/products/${productID}`)
        .then((productAPI) => { setProduct(productAPI.data) });
    }
    fetchData();
  }, [])

return(
    <>
    <div className="card mx-auto w-75 bg-light">
  <div className="row no-gutters">
    <div className="col-4">
      <img src={product.image} className="card-img" alt="..."/>
    </div>
    <div className="col-8">
      <div className="card-body">
        <h5 className="card-title text-dark">{product.title}</h5>
        <p className="card-text text-dark">{product.description}</p>
        <p className="card-text text-dark"><small className="text-muted">{product.brand}</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  
)
}
export default ProductDetail;