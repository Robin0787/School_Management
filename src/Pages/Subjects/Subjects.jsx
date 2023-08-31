import { useLoaderData } from 'react-router-dom';

const Subjects = () => {
    const class_name = useLoaderData();
    const categories = class_name.subjects;
    console.log(categories);
    return (
        <>
        <section className='h-[20vh] md:h-[30vh] xl:h-[40vh] flex justify-center items-center bg-[#0f172a] text-white w-[90%] mx-auto'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl whitespace-nowrap text-center font-thin italic'>Subjects of Class: {class_name.class}</h1>
        </section>

        </>
    );
};

export default Subjects;