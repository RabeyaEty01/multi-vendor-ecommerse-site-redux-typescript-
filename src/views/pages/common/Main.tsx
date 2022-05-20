import React, { Suspense } from 'react';
import {

    Routes,
    Route,
} from "react-router-dom";
import { routes } from 'routes/routes';
import Footer from './Footer';
import Header from './Header';




//code-splitting
const Home = React.lazy(() => import("../home/Home"));
const Login = React.lazy(() => import("../login/Login"));
const SingleProduct = React.lazy(() => import("../singleProduct/SingleProduct"));

const Main = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='container mx-auto'>
                <Suspense fallback={<>Loading...</>}>
                    <Routes>
                        {
                            routes.map((route, idx) => (
                                route.component && <Route element={<route.component />} path={route.path} key={idx}></Route>
  
                            ))
                        }
                    </Routes>
                </Suspense>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;