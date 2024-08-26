import { useContext } from "react";
import { FaCoins, FaHistory, FaRegListAlt, FaTasks } from "react-icons/fa";
import { MdAddTask, MdDriveFileMoveOutline, MdOutlineHome, MdOutlineManageAccounts, MdOutlineManageSearch, MdOutlineReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";

const SideBar = () => {

    const { user } = useContext(AuthContext);

    return (

        <div className="px-6 h-[calc(100vh-0rem)] overflow-y-auto scroll-my-0 shadow-xl ">

            <div className="mt-2 mb-6 text-center">

                <div className="avatar online">
                    <div className="ring ring-[#00B4D8] w-32 rounded-full ">
                        <img src={user.photoURL} alt={user.displayName} />
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mt-2">{user.displayName}</h3>

                <h4 className="text-md text-red-500 font-normal italic">Balance: $0.00 USD</h4>
            </div>

            <ul className="menu menu-horizontal md:menu-vertical  text-[#151515] font-medium space-y-3 capitalize">
               
                {/* for all type of users */}
                <li>
                    <NavLink to={'/dashboard'}>
                        <MdOutlineHome className="text-lg" />
                        Home
                    </NavLink>
                </li>

                {/* for Workers */}
                <li>
                    <NavLink to={'/dashboard/task-list'}>
                        <FaRegListAlt className="text-lg" />
                        Task List
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/my-submissions'}>
                        <MdDriveFileMoveOutline className="text-lg" />
                        My Submissions <span className=" text-sm font-bold">(0)</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/withdrawals'}>
                        <BiMoneyWithdraw className="text-lg" />
                        Withdrawals
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/payment-history'}>
                        <GrTransaction className="text-lg" />
                        Transactions
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/my-review'}>
                        <MdOutlineReviews className="text-lg" />
                        Add review
                    </NavLink>
                </li>

                {/* for Task Creators */}
                <li>
                    <NavLink to={'/dashboard/add-task'}>
                        <MdAddTask className="text-lg" />
                        Add New Task
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/my-task'}>
                        <FaTasks className="text-lg" />
                        My Task's
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/purchase-coin'}>
                        <FaCoins className="text-lg" />
                        Purchase Coin
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/payment-history'}>
                        <FaHistory className="text-lg" />
                        Payment history
                    </NavLink>
                </li>

                {/* for Admin */}
                <li>
                    <NavLink to={'/dashboard/manage-users'}>
                        <MdOutlineManageAccounts className="text-lg" />
                        Manage Users
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/dashboard/manage-tasks'}>
                        <MdOutlineManageSearch className="text-lg" />
                        Manage Task's
                    </NavLink>
                </li>

            </ul>

        </div>

    );
};

export default SideBar;