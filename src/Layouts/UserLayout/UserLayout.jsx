
import { Outlet } from 'react-router-dom';
import HeaderTitle from '../../Components/HeaderTitle/HeaderTitle';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const UserLayout = () => {
    return (
        <section className='bg-[#0f172a] text-white dark:min-h-screen'>
            <Navbar />
            <HeaderTitle text={"Welcome Dear!"}/>
            <Outlet />
        </section>
    );
};

export default UserLayout;