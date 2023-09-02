import Container from "../Container";
import Give_Space from "../Give_Space";


const HeaderTitle = ({ text }) => {
    return (
        <>
            <section className='h-[60px] md:h-[100px] flex justify-center items-center bg-[#0f172a] text-white w-[90%] mx-auto mt-5 md:mt-10'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl whitespace-nowrap text-center font-thin italic'>{text}</h1>
            </section>
            <Container>
                <Give_Space />
                <hr className='border-1 border-[#0f172a] dark:border-gray-700' />
            </Container>
        </>
    );
};

export default HeaderTitle;