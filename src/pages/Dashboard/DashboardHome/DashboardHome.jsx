import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import LoadingSpinner from "../../../components/LoadingSnipper/LoadingSpinner";
import useRole from "../../../hooks/useRole";
import WorkerHome from "../Worker/WorkerHome";
import CreatorHome from "../TaskCreator/CreatorHome";
import AdminHome from "../Admin/AdminHome";

const DashboardHome = () => {
    
    const { user, loading } = useContext(AuthContext);
    const [role] = useRole();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (

        <div className="p-6 bg-white rounded-lg shadow-md">

            <h2 className="text-3xl font-semibold mb-6">Welcome Back, {user.displayName || 'User'}!</h2>


            {role === 'Worker' && (
                <div>
                    <WorkerHome></WorkerHome>
                </div>
            )}

            {role === 'TaskCreator' && (
                <div>
                    <CreatorHome></CreatorHome>
                </div>
            )}

            {role === 'Admin' && (
                <div>
                    <AdminHome></AdminHome>
                </div>
            )}
        </div>
    );
};

export default DashboardHome;
