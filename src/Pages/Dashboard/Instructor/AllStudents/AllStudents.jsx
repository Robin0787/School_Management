import { Tab } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Fragment, useContext, useEffect } from "react";
import ContentLoader from '../../../../Components/ContentLoader/ContentLoader';
import CurrentStudentCard from '../../../../Components/CurrentStudentCard/CurrentStudentCard';
import { providerContext } from "../../../../Provider/Provider";



const AllStudents = () => {
    const { setUserBannerText } = useContext(providerContext);

    const { data:currentStudents={}, isLoading } = useQuery({
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

    
    const activeTab = `bg-white text-black rounded-lg border-0 outline-0  py-2 px-10 duration-200`;
    const notActive = `text-white  py-2 px-10 duration-200`;

    return (
        <section className="bg-white text-black pt-10">
            <Tab.Group >
                <section className="flex justify-center items-center mb-5">
                    <Tab.List id="tabList" className="flex w-[95%] md:w-auto p-2 rounded-lg bg-[#0f172a] overflow-x-auto">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={ selected ? activeTab : notActive} >
                                    Six
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={ selected ? activeTab : notActive} >
                                    Seven
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={ selected ? activeTab : notActive} >
                                    Eight
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={ selected ? activeTab : notActive} >
                                    Nine
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={ selected ? activeTab : notActive} >
                                    Ten
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
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
                                                    currentStudents?.six?.map((item) => <CurrentStudentCard key={item._id} item={item}/>)
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
                                                    currentStudents?.seven?.map((item) => <CurrentStudentCard key={item._id} item={item}/>)
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
                                                    currentStudents?.eight?.map((item) => <CurrentStudentCard key={item._id} item={item}/>)
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
                                                    currentStudents?.nine?.map((item) => <CurrentStudentCard key={item._id} item={item}/>)
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
                                                    currentStudents?.ten?.map((item) => <CurrentStudentCard key={item._id} item={item}/>)
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