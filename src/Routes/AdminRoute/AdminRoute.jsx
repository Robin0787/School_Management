import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { providerContext } from "../../Provider/Provider";

const AdminRoute = ({children}) => {
    const {userRole} = useContext(providerContext);
    if(userRole === 'admin') {
        return children
    }
    toast.error('You are not authorized!');
    return <Navigate to={'/dashboard'}/>
};

export default AdminRoute;