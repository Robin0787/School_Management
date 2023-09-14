import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from "react-router-dom";
import NotAuthorized from '../../Components/NotAuthorized/NotAuthorized';
import PageLoader from '../../Components/PageLoader/PageLoader';
import { providerContext } from '../../Provider/Provider';

const PrivateRoute = ({ children }) => {
    const { user, userLoading, userRole, userStatus } = useContext(providerContext);
    const location = useLocation();

    
    if (userLoading) {
        return <PageLoader />
    }
    if (user) {
        if (userRole && userStatus === 'approved') {
            return children;
        }
        if (userStatus === 'pending') {
            if(!userRole){
                return <NotAuthorized />
            }
            return <PageLoader />
        }
        return <PageLoader />
    }
    
    toast('Sign in to see Dashboard!');
    return <Navigate to={'/user/signIn'} state={{ from: location }} replace />
};

export default PrivateRoute;