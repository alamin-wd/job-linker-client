import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineNotifications } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

const Navbar = () => {

    const menus =
        <>
            <li>
                <NavLink to={'/'} activeClassName="active">
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to={'/dashboard'} activeClassName="active">
                    Dashboard
                </NavLink>
            </li>

            <li>
                <NavLink to={'/find-work'} activeClassName="active">
                    Find Work
                </NavLink>
            </li>

            <li>
                <NavLink to={'/post-work'} activeClassName="active">
                    Post Work
                </NavLink>
            </li>

            <li>
                <NavLink activeClassName="active">

                </NavLink>
            </li>
        </>

    return (
        <div className="navbar bg-base-100 px-10">

            <div className="navbar-start">

                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <HiMenuAlt1 className="text-2xl" />
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu-sm dropdown-content bg-base-200 rounded-lg z-[1] mt-2 w-40 p-2 shadow font-medium">
                        {
                            menus
                        }
                    </ul>
                </div>

                {/* Website name/logo */}
                <Link to={'/'}>
                    <button className="text-2xl md:text-4xl text-[#03045E] font-bold">
                        Job Linker
                    </button>
                </Link>

            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu-horizontal text-md font-medium gap-6 px-2">
                    {
                        menus
                    }
                </ul>


            </div>

            {/* Navbar End */}
            <div className="navbar-end flex items-center gap-6">

                <Link to={'https://www.youtube.com'}>
                    <button className="hover:bg-[#48CAE4] hover:text-white text-sm font-medium p-2 rounded-md">
                        Watch Demo
                    </button>
                </Link>

                <div className="flex items-center mt-2 gap-6">

                    <button className="">
                        <div className="indicator">
                            <FiMessageSquare className="text-2xl hover:text-[#48CAE4]" />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>

                    <button className="">
                        <div className="indicator">
                            <MdOutlineNotifications className="text-2xl hover:text-[#48CAE4]" />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>

                <div className="flex items-center gap-6">

                    <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium px-4 py-2 rounded-md">
                        Login
                    </button>

                    <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium px-4 py-2 rounded-md">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;