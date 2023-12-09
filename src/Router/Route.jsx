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
import Contact from "../Pages/Contact/Contact";




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
                element:<PrivateRoute> <MyCart></MyCart></PrivateRoute>
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
                element: <PrivateRoute><Apple></Apple></PrivateRoute>
               
            },
            {
                path: "/sony",
                element: <PrivateRoute><Sony></Sony></PrivateRoute>
                
                
            },
            {
                path:"/samsung",
                element:<PrivateRoute><Samsung></Samsung></PrivateRoute>
            },
            {
                path:"/google",
                element:<PrivateRoute><Google></Google></PrivateRoute>
            },
            {
                path:"/intel",
                element:<PrivateRoute><Intel></Intel></PrivateRoute>
            },
            {
                path:"/asus",
                element:<PrivateRoute><Asus></Asus></PrivateRoute>
            },
            {
                path:"/contact",
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            }
           
           
        ]
    },

])

export default myRoute;