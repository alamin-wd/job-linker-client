import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineNotifications } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useRole from "../../hooks/useRole";
import useUserData from "../../hooks/useUserData";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const isInDashboard = location.pathname.startsWith('/dashboard');

    const [role] = useRole();
    const { userData } = useUserData();

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    // Filter logged In User Data
    const loggedInUserData = userData && Array.isArray(userData)
        ? userData.find(userItem => userItem.email.toLowerCase() === user?.email?.toLowerCase())
        : null;


    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {
                setIsScrolled(true);
            } 
            else {
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
                <NavLink to="/" activeClassName="active">
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/dashboard" activeClassName="active">
                    Dashboard
                </NavLink>
            </li>

            {role === 'Worker' && (
                <li>
                    <NavLink to="/find-work" activeClassName="active">
                        Find Work
                    </NavLink>
                </li>
            )}

            {role === 'TaskCreator' && (
                <li>
                    <NavLink to="/post-work" activeClassName="active">
                        Post Work
                    </NavLink>
                </li>
            )}

        </>

    return (

        <div className={`navbar w-full px-10 top-0 left-0 z-50 transition-all duration-300 bg-black ${isScrolled ? 'fixed bg-opacity-80' : 'h-20 absolute bg-opacity-50'}`}>

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
            <div className="navbar-end flex items-center gap-6 ms-4">

                {user && isInDashboard && (

                    <div className="flex justify-center items-center gap-6">

                        {(role === 'TaskCreator' || role === 'Worker') && (
                            <h3 className=" text-[#00B4D8] text-lg font-medium border border-[#00B4D8] px-3 py-2">

                            Coins: {loggedInUserData?.coins}

                        </h3>
                        )}

                        <h3 className="text-[#00B4D8] text-lg font-medium border border-[#00B4D8] px-3 py-2">Role: {role}</h3>

                    </div>
                )}

                {user && !isInDashboard && (

                    <Link to={'https://www.youtube.com'}>
                        <button className="hover:bg-[#48CAE4] text-white text-sm font-medium p-2 rounded-md">
                            Watch Demo
                        </button>
                    </Link>
                )}


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

                    {
                        user ? <>

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-16 rounded-full"
                                        title={user?.displayName}>

                                        <img
                                            referrerPolicy="no-referrer"
                                            src={user?.photoURL}
                                            alt={user.displayName} />
                                    </div>
                                </label>

                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-lg w-56 bg-[#00b4d884] text-white border border-[#48CAE4]">
                                    <li>
                                        <a>{user.displayName}</a>
                                    </li>

                                    <li>
                                        <a>{user.email}</a>
                                    </li>

                                    <li>
                                        <button onClick={handleLogOut}
                                            className="px-3 py-1 text-white hover:text-[#EEFF25] font-medium">
                                            Sign Out
                                        </button>
                                    </li>

                                </ul>

                            </div>
                        </>
                            :
                            <>
                                <Link to={'/login'}>
                                    <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium px-4 py-2 rounded-md">
                                        Login
                                    </button>
                                </Link>

                                <Link to={'/register'}>
                                    <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium p-2 rounded-md">
                                        Register
                                    </button>
                                </Link>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;