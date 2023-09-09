
import { Outlet } from 'react-router-dom';
import HeaderTitle from '../../Components/HeaderTitle/HeaderTitle';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const UserLayout = () => {
    return (
        <section className='bg-[#0f172a] text-white dark:min-h-screen relative'>
            <section className='absolute top-0 left-0 w-full'>
                <Navbar />
            </section>
            <HeaderTitle/>
            <Outlet />
        </section>
    );
};

export default UserLayout;