import { useLoaderData } from 'react-router-dom';
import Container from '../../Components/Container';
import Give_Space from '../../Components/Give_Space';
import SingleBook from '../../Components/SingleBook/SingleBook';
import SingleBookCard from '../../Components/SingleBook/SingleBookCard';

const Subjects = () => {
    const class_name = useLoaderData();
    const categories = class_name.subjects;
    return (
        <>
            <Container>
                <section className='h-[60px] md:h-[100px] flex justify-center items-center bg-[#0f172a] text-white w-[90%] mx-auto mt-5 md:mt-10'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl whitespace-nowrap text-center font-thin italic'>Subjects of Class: {class_name.class}</h1>
                </section>
            </Container>
            <section className='bg-white text-black dark:bg-[#0f172a] dark:text-white duration-200'>
            <Container>
                <Give_Space />
                <hr className='border-1 border-white dark:border-gray-700'/>
                <section className="pb-20">
                <section className="pt-14">
                    <h1 className='text-2xl md:text-3xl font-bold pb-6'>Subjects</h1>
                    <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5'>
                        {
                            categories?.common?.map((subject) => <SingleBookCard key={subject.name} subject={subject}/>)
                        }
                    </article>
                </section>
                {
                    categories.science && <section className="pt-14">
                    <h1 className='text-2xl md:text-3xl font-bold pb-6'>Science</h1>
                    <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center gap-5'>
                        {
                            categories?.science?.map((subject) => <SingleBook key={subject.name} subject={subject}/>)
                        }
                    </article>
                </section>}
                {
                    categories.arts && <section className="pt-14">
                    <h1 className='text-2xl md:text-3xl font-bold pb-6'>Arts</h1>
                    <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5'>
                        {
                            categories?.arts?.map((subject) => <SingleBookCard key={subject.name} subject={subject}/>)
                        }
                    </article>
                </section>
                }
                {
                    categories.commerce && <section className="pt-14">
                    <h1 className='text-2xl md:text-3xl font-bold pb-6'>Commerce</h1>
                    <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center gap-5'>
                        {
                            categories?.commerce?.map((subject) => <SingleBook key={subject.name} subject={subject}/>)
                        }
                    </article>
                </section>
                }
                </section>
            </Container>
            </section>
        </>
    );
};

export default Subjects;