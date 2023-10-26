import { Outlet } from 'react-router-dom';
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
    

    return (
        <section className='relative bg-white text-black dark:bg-[#0f172a] dark:text-white duration-100'>
            <section className='absolute top-0 left-0 w-full'>
                <Navbar />
            </section>
            <Outlet />
            <Footer />
        </section>
    );
};

export default Main;