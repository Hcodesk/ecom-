"use client"

import React from 'react'
import {useState, useEffect } from 'react'
import axios from "axios";
import ProductItem from './productItem';
import ProductForm from './productCreateForm';

export interface Product {
    _id: string
    name: string
    price: number
}


 export default function DasboardProducts() {
   const [products, setProducts] = useState<Product[]>([])
   const [showForm, setShowForm] = useState(false)
   
   useEffect(() => {
    fetchProducts()
   }, [])

   const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products')
            setProducts(response.data.data)
        } catch (error) {
            console.error("error fetching products", error)
        }
   }

   const handleAddProduct = (product: Product) => {
        setProducts((prevProducts) => [...prevProducts, product])
        setShowForm(false)
   }

   
    return (
        <div>
            <h1>Products</h1>
            <button onClick={()=> setShowForm(true) } >Add New Product</button>
            {showForm && <ProductForm onAddProduct={handleAddProduct} />}

           {products.map((product) => (
                <ProductItem key={product._id} product = {product} />
           ) )}
        </div>
   )
 }
 