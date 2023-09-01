
import { Outlet } from 'react-router-dom';
import Container from '../../Components/Container';
import Give_Space from '../../Components/Give_Space';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const UserLayout = () => {
    return (
        <section className='bg-[#0f172a] text-white'>
            <Navbar />
            <Container>
                <section className='h-[60px] md:h-[100px] flex justify-center items-center bg-[#0f172a] text-white w-[90%] mx-auto mt-5 md:mt-10'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl whitespace-nowrap text-center font-thin italic'>Welcome Dear!</h1>
                </section>
            </Container>
            <Give_Space />
            <Container>
                <hr className='border-1 border-white dark:border-gray-700' />
            </Container>
            <Outlet />
        </section>
    );
};

export default UserLayout;