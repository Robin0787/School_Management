import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from "react-router-dom";
import Loader2 from "../../Components/Loader2/Loader2";
import { providerContext } from '../../Provider/Provider';

const PrivateRoute = ({children}) => {
    const {user, userLoading} = useContext(providerContext);
    const location = useLocation();
    console.log(userLoading);
    if(userLoading || !user){
        return <Loader2 />
    }
    if(user) {
        return children;
    }
    toast('Sign in to see Dashboard!');
    return <Navigate to={'/user/signIn'} state={{from: location}} replace/>
};

export default PrivateRoute;