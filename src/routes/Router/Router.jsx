import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/HomePage/Home/Home";
import Register from "../../pages/Authentication/Register/Register";
import Login from "../../pages/Authentication/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import DashboardHome from "../../pages/Dashboard/DashboardHome/DashboardHome";
import TaskList from "../../pages/Dashboard/Worker/TaskList";
import TaskDetails from "../../pages/Dashboard/Worker/TaskDetails";
import Submissions from "../../pages/Dashboard/Worker/Submissions";
import Withdrawals from "../../pages/Dashboard/Worker/Withdrawals";
import ManageUsers from "../../pages/Dashboard/Admin/ManageUsers";
import ManageTasks from "../../pages/Dashboard/Admin/ManageTasks";
import AddTask from "../../pages/Dashboard/TaskCreator/AddTask";
import MyTasks from "../../pages/Dashboard/TaskCreator/MyTasks";
import PurchaseCoin from "../../pages/Dashboard/TaskCreator/PurchaseCoin";
import PaymentHistory from "../../pages/Dashboard/TaskCreator/PaymentHistory";


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
                element: <DashboardHome></DashboardHome> 
            },

            // Worker Routes
            {
                path: 'task-list',
                element: <TaskList></TaskList>
            },

            {
                path: 'task-details/:id',
                element: <TaskDetails></TaskDetails>
            },

            {
                path: 'submissions',
                element: <Submissions></Submissions>
            },

            {
                path: 'withdrawals',
                element: <Withdrawals></Withdrawals>
            },

            // Task Creator Routes
            {
                path: 'add-task',
                element: <AddTask></AddTask>
            },

            {
                path: 'my-tasks',
                element: <MyTasks></MyTasks>
            },

            {
                path: 'purchase-coin',
                element: <PurchaseCoin></PurchaseCoin>
            },

            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            
            // Admin Routes
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },

            {
                path: 'manage-tasks',
                element: <ManageTasks></ManageTasks>
            }
            
        ]
    }
    
]);