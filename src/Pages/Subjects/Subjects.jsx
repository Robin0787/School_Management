import {
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from '../../Components/Container';
import ContentLoader from '../../Components/ContentLoader/ContentLoader';
import HeaderTitle from '../../Components/HeaderTitle/HeaderTitle';
import SingleBook from '../../Components/SingleBook/SingleBook';
import SingleBookCard from '../../Components/SingleBook/SingleBookCard';
import { providerContext } from '../../Provider/Provider';


const Subjects = () => {
    const class_num = useLoaderData();
    const {setUserBannerText} = useContext(providerContext);
    const base = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        setUserBannerText(`Subjects For Class : ${class_num}`);
    }, [class_num, setUserBannerText]);

    const { data: class_info = {}, isLoading } = useQuery({
        queryKey: ['class_data'],
        queryFn: async () => {
            const res = await axios.get(`${base}/subjects/${class_num}`);
            return res.data;
        }
    })
    const categories = class_info?.subjects;
    
    return (
        <section>
            <HeaderTitle />
            <section className='bg-white text-black dark:bg-[#0f172a] dark:text-white duration-200 '>
                    <Container>
                            <section className={isLoading ? '' : 'pb-20'}>
                                {
                                    isLoading ?
                                    <ContentLoader h={'h-[50vh] dark:bg-[#0f172a]'}/>
                                    :
                                    <section className="pt-14">
                                    <h1 className='text-2xl md:text-3xl font-bold pb-6'>Subjects</h1>
                                    <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5'>
                                        {
                                            categories?.common?.map((subject, index) => <SingleBookCard key={subject.name} subject={subject} index={index}/>)
                                        }
                                    </article>
                                    </section>
                                }
                                {
                                    isLoading ?
                                    '' 
                                    :
                                    (
                                        categories?.science && <section className="pt-14">
                                            <h1 className='text-2xl md:text-3xl font-bold pb-6'>Science</h1>
                                            <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center gap-5'>
                                                {
                                                    categories?.science?.map((subject, index) => <SingleBook key={subject.name} subject={subject} index={index}/>)
                                                }
                                            </article>
                                        </section>
                                    )
                                }
                                {
                                    isLoading ?
                                    ''
                                    :
                                    (
                                        categories?.arts && <section className="pt-14">
                                        <h1 className='text-2xl md:text-3xl font-bold pb-6'>Arts</h1>
                                        <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5'>
                                            {
                                                categories?.arts?.map((subject, index) => <SingleBookCard key={subject.name} subject={subject} index={index}/>)
                                            }
                                        </article>
                                    </section>
                                    )
                                }
                                {
                                    isLoading ?
                                    '' 
                                    :
                                    (
                                        categories?.commerce && <section className="pt-14">
                                        <h1 className='text-2xl md:text-3xl font-bold pb-6'>Commerce</h1>
                                        <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center gap-5'>
                                            {
                                                categories?.commerce?.map((subject, index) => <SingleBook key={subject.name} subject={subject} index={index}/>)
                                            }
                                        </article>
                                    </section>
                                    )
                                }
                            </section>
                    </Container>
            </section>
        </section>
    );
};

export default Subjects;