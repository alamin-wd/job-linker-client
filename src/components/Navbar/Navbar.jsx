import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineNotifications } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <div className={`navbar w-full px-10 top-0 left-0 z-50 transition-all duration-300 bg-black ${isScrolled ? 'fixed bg-opacity-80' : 'h-20 absolute bg-opacity-30'}`}>

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
                    <button className="text-2xl md:text-4xl text-[#48CAE4] font-bold">
                        Job Linker
                    </button>
                </Link>

            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu-horizontal text-md text-white font-medium gap-6 px-2">
                    {
                        menus
                    }
                </ul>


            </div>

            {/* Navbar End */}
            <div className="navbar-end flex items-center gap-6">

                <Link to={'https://www.youtube.com'}>
                    <button className="hover:bg-[#48CAE4] text-white text-sm font-medium p-2 rounded-md">
                        Watch Demo
                    </button>
                </Link>

                <div className="flex items-center mt-2 gap-6">

                    <button className="">
                        <div className="indicator">
                            <FiMessageSquare className="text-2xl text-white hover:text-[#48CAE4]" />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>

                    <button className="">
                        <div className="indicator">
                            <MdOutlineNotifications className="text-2xl text-white hover:text-[#48CAE4]" />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>

                <div className="flex items-center gap-6">

                    <Link to={'/login'}>
                        <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium px-4 py-2 rounded-md">
                            Login
                        </button>
                    </Link>

                    <Link to={'/register'}>
                        <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium px-4 py-2 rounded-md">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;