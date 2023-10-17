import { Tab } from '@headlessui/react';
import { useQuery } from "@tanstack/react-query";
import AOS from 'aos';
import axios from 'axios';
import { useCallback, useState } from 'react';
import Container from '../../Components/Container';
import ContentLoader from '../../Components/ContentLoader/ContentLoader';
import ListDropdown from '../../Components/ListDropdown/ListDropdown';
import StudentsTable from '../Home/StudentsTable/StudentsTable';
import Navbar from "../Shared/Navbar/Navbar";

const groups = ['Science', 'Arts', 'Commerce'];
const genders = ['Male', 'Female'];

const OurStudents = () => {
    AOS.init();
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
        <section className="min-h-screen">
            <section className="bg-[#0f172a] pb-2">
                <Navbar />
            </section>
            <section className='min-h-[calc(100vh-86px)] pt-14 bg-white textblack dark:bg-[#0f172a] dark:text-white duration-300'>
                <Container>
                    <section className="flex h-full flex-col lg:flex-row justify-between items-start">
                        <Tab.Group >

                            <Tab.List data-aos="zoom-in-up" data-aos-delay="50" data-aos-once="false"
                                data-aos-mirror="false"
                                className={'bg-transparent w-full lg:w-[15%] flex flex-col justify-start items-start border dark:border-gray-600 rounded md:mt-1 lg:mr-5'}>
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
                                <>
                                {
                                    showGenderFilter
                                        ?
                                        <div className='w-full'>
                                            <ListDropdown items={genders}
                                                handleList={handleGenderList} selected={selectedGender}
                                                title={'Gender'} border="border-0" align="text-center" zIndex={'10'} />
                                        </div>
                                        :
                                        ''
                                }
                                {
                                    showGroupFilter
                                        ?
                                        <div className='w-full'>
                                            <ListDropdown items={groups} handleList={handleGroupList} selected={selectedGroup} title={'Group'} border="border-0" align="text-center" zIndex={'10'} />
                                        </div>
                                        :
                                        ''
                                }
                                </>
                            </Tab.List>

                            <Tab.Panels data-aos="zoom-in-up" data-aos-delay="50" data-aos-once="false" data-aos-mirror="false"
                                className={"md:mt-1 h-full w-full lg:w-[80%]"}>
                                <Tab.Panel className={'flex justify-start items-center h-full w-full'}>
                                    {
                                        isLoading ?
                                            <section className="w-full"><ContentLoader /></section>
                                            :
                                            (
                                                students?.six?.length > 0 ?
                                                    <StudentsTable items={students.six} query={'gender'} value={selectedGender} h={"md:h-[480px]"}/>
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
                                            <section className="w-full"><ContentLoader /></section>
                                            :
                                            (
                                                students?.seven?.length > 0 ?
                                                    <StudentsTable items={students.seven} query={'gender'} value={selectedGender} h={"md:h-[480px]"}/>
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
                                            <section className="w-full"><ContentLoader /></section>
                                            :
                                            (
                                                students?.eight?.length > 0 ?
                                                    <StudentsTable items={students.eight} query={'gender'} value={selectedGender} h={"md:h-[480px]"}/>
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
                                            <section className="w-full"><ContentLoader /></section>
                                            :
                                            (
                                                students?.nine?.length > 0 ?
                                                    <StudentsTable items={students.nine} query={'group'} value={selectedGroup} h={"md:h-[480px]"}/>
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
                                            <section className="w-full"><ContentLoader /></section>
                                            :
                                            (
                                                students?.ten?.length > 0 ?
                                                    <StudentsTable items={students.ten} query={'group'} value={selectedGroup} h={"md:h-[480px]"}/>
                                                    :
                                                    <section className='flex justify-center items-center h-full w-full'>
                                                        <h1 className='text-xl text-center italic'>No Students Available!</h1>
                                                    </section>
                                            )
                                    }
                                </Tab.Panel>
                            </Tab.Panels>
                            
                        </Tab.Group>
                    </section>
                </Container>
            </section>
        </section>
    );
};

export default OurStudents;