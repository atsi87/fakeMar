import React from 'react'
import { useEffect , useState } from 'react';
import ProductCard from './ProductCard';

function Products({Products ,loading}) {
console.log(Products);
return (
    <>
        
    {loading ? (
        <div>...loading</div>
        ) : (
        <div className="ProductsContainer">
        {Products.map((product) => (
        <ProductCard
            key={product.id}
                product={product}
                title={product.title}
                price={product.price}
                img={product.image}
            />
            ))}
        </div>
        )}
    </>
    );
}
export default Products;