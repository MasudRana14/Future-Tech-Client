import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Apple from "../Pages/Apple/Apple";
import Sony from "../Pages/Sony/Sony";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Samsung from "../Pages/Samsung/Samsung";
import Google from "../Pages/Google/Google";
import Intel from "../Pages/Intel/Intel";
import Asus from "../Pages/Asus/Asus";


const myRoute = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/product",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/mycart",
                element: <MyCart></MyCart>
            },
            {
                path:"/about",
                element:<AboutUs></AboutUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/apple",
                element: <Apple></Apple>
               
            },
            {
                path: "/sony",
                element: <Sony></Sony>
                
            },
            {
                path:"/samsung",
                element:<Samsung></Samsung>
            },
            {
                path:"/google",
                element:<Google></Google>
            },
            {
                path:"/intel",
                element:<Intel></Intel>
            },
            {
                path:"/asus",
                element:<Asus></Asus>
            }
        ]
    },

])

export default myRoute;