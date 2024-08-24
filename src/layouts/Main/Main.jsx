import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Main = () => {

    return (

        <div className="max-w-full mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-430px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;