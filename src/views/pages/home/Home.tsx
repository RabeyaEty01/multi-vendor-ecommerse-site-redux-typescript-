import React from 'react';
import DSlider from 'views/components/custom/DSlider';
import ProductArray from 'views/components/home/ProductArray';


const Home = () => {
    return (
        <main>
            <div className='py-20'>
                <DSlider />
            </div>
            <div>
                <ProductArray/>
            </div>
        </main>
    );
};

export default Home;