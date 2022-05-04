import React, { useEffect, useState } from 'react';
import ProductService from 'services/Product.service';
import DSlider from 'views/components/custom/DSlider';
import ProductArray from 'views/components/home/ProductArray';



const Home = () => {
    const [products, setProducts] = useState<[] | any[]>([]);

    useEffect(() => {
        ProductService.getAllProducts()
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <main>
            <div className='py-20'>
                <DSlider />
            </div>
            <div>
                <ProductArray products={products} />
            </div>
        </main>
    );
};

export default Home;