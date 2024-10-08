
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../pages/Dashboard/SideBar/SideBar";


const DashboardLayout = () => {

    return (

        <div className="py-20">

            <Navbar></Navbar>

            <div className="w-11/12 mx-auto my-10 flex flex-col md:flex-row gap-10">

                {/* Side Bar */}
                <div className="w-full md:w-96 min-h-screen md:block">
                    <SideBar></SideBar>
                </div>

                {/* Content Area */}
                <div className="flex-auto">
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default DashboardLayout;
