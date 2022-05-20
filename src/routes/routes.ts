import React from "react";
import store from "redux/store";
import MarchantDashboard from "views/pages/dashboards/MarchantDashboard";


const Home = React.lazy(() => import("views/pages/home/Home"));

const SingleProduct = React.lazy(() => import("views/pages/singleProduct/SingleProduct"));

const Login = React.lazy(() => import("views/pages/login/Login"))
const AdminDashboard = React.lazy(() => import("views/pages/dashboards/AdminDashboard"))

const { auth } = store.getState();

const getRoleBaseDashboard = (role: string) => {
    switch (role) {
        case 'admin':
            return AdminDashboard;

        case 'marchant':
            return MarchantDashboard;


        default:
            return null
    }
}



export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/product/:id",
        name: "Product Details",
        component: SingleProduct
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: getRoleBaseDashboard(role)
    },

]