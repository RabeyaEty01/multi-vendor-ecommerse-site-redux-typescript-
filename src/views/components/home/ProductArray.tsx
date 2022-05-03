import React from 'react';
import ProductCard from '../common/ProductCard';


const ProductArray = () => {
    return (
        <div className="grid-cols-4">
            {
                [1, 2, 3, 4].map((item) => (
                    <ProductCard />
                ))
            }
        </div>
    );
};

export default ProductArray;