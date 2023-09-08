import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { providerContext } from '../../Provider/Provider';

const InstructorRoute = ({children}) => {
    const {userRole} = useContext(providerContext);
    if(userRole === 'instructor'){
        return children
    }
    toast.error('You are not authorized!');
    return <Navigate to={-1}/>
};

export default InstructorRoute;