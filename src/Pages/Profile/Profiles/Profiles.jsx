import { useContext } from 'react';
import { providerContext } from '../../../Provider/Provider';
import AdminProfile from './AdminProfile';

const Profiles = () => {
    const { userRole } = useContext(providerContext);

    if(userRole === 'admin') {
        return <AdminProfile />
    }
};

export default Profiles;