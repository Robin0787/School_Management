import { Tab } from '@headlessui/react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { useCallback, useState } from 'react';
import Calender from "../../../Components/Calender/Calender";
import Container from "../../../Components/Container";
import ContentLoader from '../../../Components/ContentLoader/ContentLoader';
import ListDropdown from "../../../Components/ListDropdown/ListDropdown";
import StudentsTable from '../StudentsTable/StudentsTable';

const groups = ['Science', 'Arts', 'Commerce'];
const genders = ['Male', 'Female'];

const Students = () => {

    const [selectedGroup, setSelectedGroup] = useState(groups[0]);
    const [showGroupFilter, setGroupFilter] = useState(false);
    const [showGenderFilter, setGenderFilter] = useState(true);
    const [selectedGender, setSelectedGender] = useState(genders[0]);



    const { data: students = {}, isLoading } = useQuery({
        queryKey: ['show-students'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/get-all-current-students`;
            const res = await axios.get(url);
            return res.data;
        }
    });


    const handleGroupList = useCallback((group) => {
        setSelectedGroup(group);
    }, []);

    const handleGenderList = useCallback((gender) => {
        setSelectedGender(gender);
    }, []);

    return (
        <section id='students' className='py-10 md:py-20'>
            <Container>
                <section className=''>
                    <h1 className="text-5xl font-bold leading-snug text-center uppercase md:whitespace-nowrap">
                        Current <span className="text-[#00db50]">Student</span> Directory
                    </h1>
                    <p className='mt-3 md:w-[90%] mx-auto text-center text-gray-600 dark:text-gray-300'>Welcome to our Current Student Directory, where you can find information about the talented individuals currently pursuing their education at our institution. Our students are the heart of our school. Get to know the bright minds who shape the future within our halls of learning.</p>
                </section>

                <section className="pt-10 grid grid-cols-1 md:grid-cols-[1fr_4fr] 
                lg:grid-cols-[1fr_4fr_2fr] gap-5 lg:gap-1 justify-start ">
                    <Tab.Group >
                        
                        <Tab.List className={'bg-transparent flex flex-col justify-start items-center border dark:border-gray-600 rounded md:mt-1 lg:mr-5'}>
                            <Tab
                                onClick={() => { setGroupFilter(false); setGenderFilter(true) }} className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                                Six
                            </Tab>
                            <Tab
                                onClick={() => { setGroupFilter(false); setGenderFilter(true) }} className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                                Seven
                            </Tab>
                            <Tab
                                onClick={() => { setGroupFilter(false); setGenderFilter(true) }} className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                                Eight
                            </Tab>
                            <Tab
                                onClick={() => { setGroupFilter(true); setGenderFilter(false) }} className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                                Nine
                            </Tab>
                            <Tab
                                onClick={() => { setGroupFilter(true); setGenderFilter(false) }} className={({ selected }) => selected ? "tab-active" : "tab-default"}>
                                Ten
                            </Tab>
                            {
                                showGroupFilter
                                    ?
                                    <div className='w-full'>
                                        <ListDropdown items={groups} handleList={handleGroupList} selected={selectedGroup} title={'Group'} border="border-b" align="text-center" />
                                    </div>
                                    :
                                    ''
                            }
                            {
                                showGenderFilter
                                    ?
                                    <div className='w-full'>
                                        <ListDropdown items={genders}
                                            handleList={handleGenderList} selected={selectedGender}
                                            title={'Gender'} border="border-b" align="text-center" />
                                    </div>
                                    :
                                    ''
                            }
                        </Tab.List>

                        <Tab.Panels className={"md:mt-1 h-full"}>
                            <Tab.Panel className={'flex justify-start items-center h-full w-full'}>
                                {
                                    isLoading ?
                                        <ContentLoader />
                                        :
                                        (
                                            students?.six.length > 0 ?
                                                <StudentsTable items={students.six} query={'gender'} value={selectedGender} />
                                                :
                                                <section className='flex justify-center items-center h-full w-full'>
                                                    <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                                </section>
                                        )
                                }
                            </Tab.Panel>
                            <Tab.Panel className={'flex justify-start items-center h-full w-full'}>
                                {
                                    isLoading ?
                                        <ContentLoader />
                                        :
                                        (
                                            students?.seven.length > 0 ?
                                                <StudentsTable items={students.seven} query={'gender'} value={selectedGender} />
                                                :
                                                <section className='flex justify-center items-center h-full w-full'>
                                                    <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                                </section>
                                        )
                                }
                            </Tab.Panel>
                            <Tab.Panel className={'flex justify-start items-center h-full w-full'}>
                                {
                                    isLoading ?
                                        <ContentLoader />
                                        :
                                        (
                                            students?.eight.length > 0 ?
                                                <StudentsTable items={students.eight} query={'gender'} value={selectedGender} />
                                                :
                                                <section className='flex justify-center items-center h-full w-full'>
                                                    <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                                </section>
                                        )
                                }
                            </Tab.Panel>
                            <Tab.Panel className={'flex justify-start items-center h-full w-full'}>
                                {
                                    isLoading ?
                                        <ContentLoader />
                                        :
                                        (
                                            students?.nine.length > 0 ?
                                                <StudentsTable items={students.nine} query={'group'} value={selectedGroup} />
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
                                                <StudentsTable items={students.ten} query={'group'} value={selectedGroup} />
                                                :
                                                <section className='flex justify-center items-center h-full w-full'>
                                                    <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                                </section>
                                        )
                                }
                            </Tab.Panel>
                        </Tab.Panels>

                        <div className="hidden lg:flex flex-col justify-start items-center h-full w-full">
                            <Calender />
                        </div>
                    </Tab.Group>
                </section>
            </Container>
        </section>
    );
};

export default Students;