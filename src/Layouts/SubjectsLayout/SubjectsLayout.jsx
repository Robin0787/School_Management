import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const SubjectsLayout = () => {
    return (
        <section className='bg-[#0f172a] text-white relative dark:min-h-screen'>
            <section className="absolute top-0 w-full">
                <Navbar />
            </section>
            <Outlet />
            <Footer />
        </section>
    );
};

export default SubjectsLayout;