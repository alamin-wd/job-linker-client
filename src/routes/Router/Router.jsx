import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/HomePage/Home/Home";
import Register from "../../pages/Authentication/Register/Register";
import Login from "../../pages/Authentication/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Content from "../../pages/Dashboard/Content/Content";


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

    // Dashboard
    {
        path: "dashboard",
        element: <PrivateRoute>
                            <DashboardLayout></DashboardLayout>
                </PrivateRoute>,

        children: [
            {
                path: '',
                element: <Content></Content>
            }
        ]
    }
]);