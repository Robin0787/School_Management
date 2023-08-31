import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const SubjectsLayout = () => {
    return (
        <section className='bg-[#0f172a] text-white'>
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    );
};

export default SubjectsLayout;