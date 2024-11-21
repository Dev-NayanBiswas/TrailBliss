import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "./Pages/ErrorElements/ErrorPage";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Registration from "./Pages/Registration/Registration";
import SignUp from "./Pages/Registration/SignUp";
import SignIn from "./Pages/Registration/SignIn";
import SecuredRoute from "./SecuredRoute";
import Update from "./Pages/UpdatePage/Update";
import ForgotPass from "./Pages/Home/ForgotPass/ForgotPass";
import AllCards from "./Pages/Home/AllCards";
import CategoryWiseCards from "./Pages/Home/CategoryWiseCards";
import PackageDetails from "./Pages/Details/PackageDetails";
import Galleries from "./Pages/Gallery/Galleries";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        loader:()=>fetch("../adventure.json"),
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:()=>fetch("../adventure.json"),
                children:[
                    {
                        index:true,
                        element:<AllCards/>
                    },
                    {
                        path:"categoryWiseCards/:category",
                        element:<CategoryWiseCards/>
                    }
                ]
            },
            {
                path:"gallery",
                element:<Galleries/>
            },
            {
                path:"portfolio",
                element:<SecuredRoute>
                    <Portfolio/>
                </SecuredRoute>
            },
            {
                path:"updatePage",
                element:<SecuredRoute>
                    <Update/>
                </SecuredRoute>
            },
            {
                path:"/reset/:value?",
                element:<ForgotPass/>
            },
            {
                path:"details/:ID",
                element:<SecuredRoute>
                    <PackageDetails/>
                </SecuredRoute>
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