import React, { Suspense } from 'react';
import {

    Routes,
    Route,
} from "react-router-dom";
import SingleProduct from '../singleProduct/singleProduct';

//code-splitting
const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default Main;