import { Outlet } from 'react-router-dom';
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <section className='bg-white text-black dark:bg-[#0f172a] dark:text-white duration-100'>
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    );
};

export default Main;