import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "./Pages/ErrorElements/ErrorPage";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Registration from "./Pages/Registration/Registration";
import SignUp from "./Pages/Registration/SignUp";
import SignIn from "./Pages/Registration/SignIn";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"aboutUs",
                element:<AboutUs/>
            },
            {
                path:"contactUs",
                element:<ContactUs/>
            },
            {
                path:"portfolio",
                element:<Portfolio/>
            },
            {
                path:"registration",
                element:<Registration/>,
                children:[
                    {
                        index:true,
                        element:<Navigate to={"/registration/signIn"} replace/>
                    },
                    {
                        path:"signUp",
                        element:<SignUp/>
                    },
                    {
                        path:"signIn",
                        element:<SignIn/>
                    }
                ]
            }
        ]
    }
])

export default Routes;