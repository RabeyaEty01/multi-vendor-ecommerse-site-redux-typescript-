import React from 'react';
import ProductCard from '../common/ProductCard';


const ProductArray = ({ products }: { products: any[] }) => {
    return (
        <div className="grid-cols-4">
            {
                products.map((product) => (
                    <ProductCard product={product} />
                ))
            }
        </div>
    );
};

export default ProductArray;