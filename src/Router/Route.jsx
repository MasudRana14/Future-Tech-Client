import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


const myRoute = createBrowserRouter([

    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage> ,
        children:[
            {
                path: "/",
                element:<Home></Home>,
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
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            }
        ]
    },
   
])

export default myRoute;