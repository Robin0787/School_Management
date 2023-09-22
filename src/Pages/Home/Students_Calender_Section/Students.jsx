import { Tab } from '@headlessui/react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Calender from "../../../Components/Calender/Calender";
import Container from "../../../Components/Container";
import ContentLoader from '../../../Components/ContentLoader/ContentLoader';
import StudentsTable from '../StudentsTable/StudentsTable';

const Students = () => {

    const {data: students={}, isLoading} = useQuery({
        queryKey: ['show-students'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/get-all-current-students`;
            const res = await axios.get(url);
            return res.data;
        }
    });

    console.log(students);

    return (
        <Container>
            <section className="grid grid-cols-1 md:grid-cols-[1fr_4fr] 
                lg:grid-cols-[1fr_4fr_2fr] gap-5 lg:gap-0 justify-between">
                <Tab.Group >
                    <Tab.List className={'bg-transparent flex flex-col justify-start items-center border dark:border-gray-600 rounded md:mt-2 lg:mr-5'}>
                        <Tab className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                            Six
                        </Tab>
                        <Tab className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                            Seven
                        </Tab>
                        <Tab className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                            Eight
                        </Tab>
                        <Tab className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                            Nine
                        </Tab>
                        <Tab className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                            Ten
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className={"md:mt-2"}>
                        <Tab.Panel className={'flex justify-center items-center h-full w-full'}>
                            {
                                isLoading ? 
                                <ContentLoader />
                                : 
                                (
                                    students?.six.length > 0 ?
                                    <StudentsTable items={students.six} />
                                    :
                                    <section className='flex justify-center items-center h-full w-full'>
                                        <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                    </section>
                                )
                            }
                        </Tab.Panel>
                        <Tab.Panel className={'flex justify-center items-center h-full w-full'}>
                            {
                                isLoading ? 
                                <ContentLoader />
                                : 
                                (
                                    students?.seven.length > 0 ?
                                    <StudentsTable items={students.seven} />
                                    :
                                    <section className='flex justify-center items-center h-full w-full'>
                                        <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                    </section>
                                )
                            }
                        </Tab.Panel>
                        <Tab.Panel className={'flex justify-center items-center h-full w-full'}>
                            {
                                isLoading ? 
                                <ContentLoader />
                                : 
                                (
                                    students?.eight.length > 0 ?
                                    <StudentsTable items={students.eight} />
                                    :
                                    <section className='flex justify-center items-center h-full w-full'>
                                        <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                    </section>
                                )
                            }
                        </Tab.Panel>
                        <Tab.Panel className={'flex justify-center items-center h-full w-full'}>
                            {
                                isLoading ? 
                                <ContentLoader />
                                : 
                                (
                                    students?.nine.length > 0 ?
                                    <StudentsTable items={students.nine} />
                                    :
                                    <section className='flex justify-center items-center h-full w-full'>
                                        <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                    </section>
                                )
                            }
                        </Tab.Panel>
                        <Tab.Panel className={'flex justify-center items-center h-full w-full'}>
                            {
                                isLoading ? 
                                <ContentLoader />
                                : 
                                (
                                    students?.ten.length > 0 ?
                                    <StudentsTable items={students.ten} />
                                    :
                                    <section className='flex justify-center items-center h-full w-full'>
                                        <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                    </section>
                                )
                            }
                        </Tab.Panel>
                    </Tab.Panels>
                    <div className="hidden lg:flex justify-center items-center h-full w-full">
                        <Calender />
                    </div>
                </Tab.Group>
            </section>
        </Container>
    );
};

export default Students;