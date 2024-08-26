import { useContext } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdOutlineDashboard, MdRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { GoFileSubmodule } from "react-icons/go";
import { BiMoneyWithdraw } from "react-icons/bi";

const SideBar = () => {

    const { user } = useContext(AuthContext);

    return (

        <div className="px-10 h-[calc(100vh-0rem)] overflow-y-auto scroll-my-0 shadow-xl ">

            <div className="mt-2 mb-6 text-center">

                <div className="avatar online">
                    <div className="ring ring-[#00B4D8] w-32 rounded-full ">
                        <img src={user.photoURL} alt={user.displayName} />
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mt-2">{user.displayName}</h3>

                <h4 className="text-md text-red-500 font-normal italic">Balance: $0.00 USD</h4>
            </div>

            <ul className="menu menu-horizontal md:menu-vertical  text-[#151515] font-medium space-y-3 uppercase">
                <li>
                    <NavLink to={'/dashboard'}>
                        <MdOutlineDashboard className="text-2xl" />
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/task-list'}>
                        <FaRegListAlt className="text-2xl" />
                        Task List
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/my-submissions'}>
                        <GoFileSubmodule className="text-2xl" />
                        My Submissions <span className=" text-sm font-bold">(0)</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/withdrawals'}>
                        <BiMoneyWithdraw className="text-2xl" />
                        Withdrawals
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/payment-history'}>
                        <GiWallet className="text-2xl" />
                        Transactions
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/my-review'}>
                        <MdRateReview className="text-2xl" />
                        Add review
                    </NavLink>
                </li>
            </ul>
        </div>

    );
};

export default SideBar;