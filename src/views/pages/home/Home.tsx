import useAPI from 'hooks/useAPI';
import React, { useEffect, useState } from 'react';
import ProductService from 'services/Product.service';
import DSlider from 'views/components/custom/DSlider';
import ProductArray from 'views/components/home/ProductArray';

const Home = () => {
    // const [products, setProducts] = useState<[] | IProduct[]>([]);

    // useEffect(() => {
    //     ProductService.getAllProducts()
    //         .then((data) => setProducts(data))
    //         .catch((err) => console.log(err))
    // }, [])


    //data:products means rename korche data ke products name e . as shobai data e pass korbe tai rename kora better.
    const { data: products } = useAPI<IProduct[]>(ProductService.getAllProducts);

    return (
        <main>
            <div className='py-20'>
                <DSlider />
            </div>
            <div>{
                products &&
                <ProductArray products={products} />
            }

            </div>
        </main>
    );
};

export default Home;