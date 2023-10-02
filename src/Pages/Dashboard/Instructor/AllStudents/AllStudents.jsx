import { Tab } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import ContentLoader from '../../../../Components/ContentLoader/ContentLoader';
import CurrentStudentCard from '../../../../Components/CurrentStudentCard/CurrentStudentCard';
import { providerContext } from "../../../../Provider/Provider";
import FilterOption from './FilterOption';

const groups = ['Science', 'Arts', 'Commerce'];
const genders = ['Male', 'Female'];

const AllStudents = () => {
    const { setUserBannerText } = useContext(providerContext);
    const [selectedGroup, setSelectedGroup] = useState(groups[0]);
    const [showGroupFilter, setGroupFilter] = useState(false);
    const [showGenderFilter, setGenderFilter] = useState(true);
    const [selectedGender, setSelectedGender] = useState(genders[0]);

    const { data: currentStudents = {}, isLoading, refetch } = useQuery({
        queryKey: ['current-students'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/get-current-students`;
            const res = await axios.get(url);
            return res.data;
        }
    });


    useEffect(() => {
        setUserBannerText('All Students!');
    }, [setUserBannerText]);


    const handleGroupList = useCallback((group) => {
        setSelectedGroup(group);
    }, []);

    const handleGenderList = useCallback((gender) => {
        setSelectedGender(gender);
    }, []);

    const activeTab = `bg-white text-black rounded-lg border-0 outline-0  py-2 px-10 duration-200`;
    const notActive = `text-white  py-2 px-10 duration-200`;

    return (
        <section className="bg-white text-black pt-10">
            <Tab.Group >
                <section className="flex justify-center items-center mb-5">
                    <Tab.List id="tabList" className="flex w-[95%] md:w-auto p-2 rounded-lg bg-[#0f172a] overflow-x-auto">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? activeTab : notActive} 
                                    onClick={() => { setGroupFilter(false); setGenderFilter(true) }} >
                                    Six
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? activeTab : notActive} 
                                onClick={() => { setGroupFilter(false); setGenderFilter(true) }} >
                                    Seven
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? activeTab : notActive} 
                                onClick={() => { setGroupFilter(false); setGenderFilter(true) }} >
                                    Eight
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? activeTab : notActive} 
                                onClick={() => { setGroupFilter(true); setGenderFilter(false) }} >
                                    Nine
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? activeTab : notActive} 
                                onClick={() => { setGroupFilter(true); setGenderFilter(false) }}>
                                    Ten
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                </section>
                <section className='px-5'>
                {
                    showGenderFilter
                        ?
                        <div className='w-[160px]'>
                            <FilterOption items={genders}
                                handleList={handleGenderList} selected={selectedGender}
                                title={'Gender'} border="border border-gray-600" align="text-center" zIndex={'10'} />
                        </div>
                        :
                        ''
                }
                 {
                    showGroupFilter
                        ?
                        <div className='w-[160px]'>
                            <FilterOption items={groups} handleList={handleGroupList} selected={selectedGroup} title={'Group'} border="border border-gray-600" align="text-center" zIndex={'10'} />
                        </div>
                        :
                        ''
                }
                </section>
                <Tab.Panels >
                    <Tab.Panel >
                        {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        currentStudents.six ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    currentStudents?.six?.filter((item) => item.gender === selectedGender).map((item) => 
                                                    <CurrentStudentCard  key={item._id} item={item} refetch={refetch} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No student is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </Tab.Panel>
                    <Tab.Panel >
                        {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        currentStudents.seven ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    currentStudents?.seven?.filter((item) => item.gender === selectedGender).map((item) => 
                                                    <CurrentStudentCard  key={item._id} item={item} refetch={refetch} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No student is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </Tab.Panel>
                    <Tab.Panel >
                        {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        currentStudents.eight ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    currentStudents?.eight?.filter((item) => item.gender === selectedGender).map((item) => 
                                                    <CurrentStudentCard  key={item._id} item={item} refetch={refetch} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No student is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </Tab.Panel>
                    <Tab.Panel >
                        {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        currentStudents.nine ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    currentStudents?.nine?.filter((item) => 
                                                    item.group === selectedGroup).map((item) => 
                                                    <CurrentStudentCard  key={item._id} item={item} refetch={refetch} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No student is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </Tab.Panel>
                    <Tab.Panel >
                        {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        currentStudents.ten ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    currentStudents?.ten?.filter((item) => 
                                                    item.group === selectedGroup).map((item) => 
                                                    <CurrentStudentCard  key={item._id} item={item} refetch={refetch} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No student is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    );
};

export default AllStudents;