import Products from '../api/products.json'
import { useState, useEffect } from 'react'
import ProductItem from './ui/ProductItem';

export default function Favorites(){
   
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        setProducts(Products);
    },[])

    return(
        <div>
            <h3 className="text-sm font-semibold px-6 md:px-0 mb-3">Favoriler</h3>
            <div className='grid grid-cols-3 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4 gap-0.1 rounded-lg overflow-hidden'>
                {products.length && products.map((product, index) => <ProductItem key={index} product={product} />)}
            </div>
        </div>
    )
}