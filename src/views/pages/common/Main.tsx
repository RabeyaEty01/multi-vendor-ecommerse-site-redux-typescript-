import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
//import Home from '../home/Home';

//const OtherComponent = React.lazy(() => import('./OtherComponent'));

const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Main;