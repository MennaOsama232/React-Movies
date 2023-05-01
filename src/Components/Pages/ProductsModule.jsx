import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import AddProduct from "./AddProduct";
import ProductDetail from "./ProductDetail";

const ProductsModule = () => {

    return (
        <Routes>
            <Route index element={<Products/>} />
            <Route path="add" element={<AddProduct/>} />
            <Route path=":productID" element={<ProductDetail/>} />
        </Routes>
    )

}
export default ProductsModule;