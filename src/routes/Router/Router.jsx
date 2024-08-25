import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/HomePage/Home/Home";
import Register from "../../pages/Authentication/Register/Register";
import Login from "../../pages/Authentication/Login/Login";
import NotFound from "../../components/NotFound/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);