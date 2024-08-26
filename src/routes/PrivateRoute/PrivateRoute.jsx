import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from '../../components/LoadingSnipper/LoadingSpinner';

const PrivateRoute = ({ children }) => { 

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children;
    }
    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>

};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;