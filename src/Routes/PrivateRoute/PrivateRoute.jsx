import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from "react-router-dom";
import Loader2 from "../../Components/Loader2/Loader2";
import NotAuthorized from '../../Components/NotAuthorized/NotAuthorized';
import { providerContext } from '../../Provider/Provider';

const PrivateRoute = ({ children }) => {
    const { user, userLoading, userRole } = useContext(providerContext);
    const location = useLocation();

    if (userLoading) {
        return <section className='h-screen bg-white dark:bg-[#0f172a] flex justify-center items-center overflow-hidden'> <Loader2 /> </section>
    }
    else if (user) {
        if (userRole) {
            return children;
        }
        if (userLoading) {
            return <Loader2 />
        }
        else {
            return <NotAuthorized />
        }
    }
    toast('Sign in to see Dashboard!');
    return <Navigate to={'/user/signIn'} state={{ from: location }} replace />
};

export default PrivateRoute;