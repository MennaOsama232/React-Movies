import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
function Products() {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    
    getAllProducts();
  }, [])


//getAllProducts
async function getAllProducts() {
  const productsAPI=await fetch('http://localhost:3003/products').then((res)=>res.json())
    setProducts(productsAPI) 
}

//update product
const updateProduct =(productID)=>{
fetch(`http://localhost:3003/products/${productID}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'new product title',
    price:900
  })
})
.then(res => res.json()).then(getAllProducts);
}

//delete product
const deleteProduct = (product) =>{

  Swal.fire({
    title: `Delete ${product.title}?`,
    text: "You won't be able to undo this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#198754',
    cancelButtonColor: '#800000',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3003/products/${product.id}`, {
        method: 'DELETE',
      })
      .then(res => res.json()).then(getAllProducts);
      
    }
  })


}

  return (
    <>

      <Link to="/products/add" className="btn btn-warning col-md-12 my-4">Add New Product</Link>
      <table className="table text-light">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">  </th>
            <th scope="col">  </th>
            <th scope="col">  </th>

          </tr>
        </thead>
        <tbody>

          {products.map((product) => {
            return (
              <tr key={product.id}>

                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td><Link to={`/products/${product.id}`} type="button" className="btn btn-outline-success">View</Link></td>
                <td><button type="button" className="btn btn-outline-warning" onClick={()=>{updateProduct(product.id)}}>Update</button></td>
                <td><button type="button" className="btn btn-outline-danger" onClick={()=>{deleteProduct(product)}}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default Products;