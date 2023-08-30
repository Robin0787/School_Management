import { useLoaderData } from 'react-router-dom';

const Subjects = () => {
    const class_name = useLoaderData();
    return (
        <section className='text-5xl text-center h-[40vh] flex justify-center items-center '>
            <h1>Subject of Class : {class_name}</h1>
        </section>
    );
};

export default Subjects;