import { Tab } from '@headlessui/react';
import { Fragment, useContext, useEffect } from "react";
import { providerContext } from "../../../../Provider/Provider";



const AllStudents = () => {
    const { setUserBannerText } = useContext(providerContext);


    useEffect(() => {
        setUserBannerText('All Students!');
    }, [setUserBannerText]);


    const activeTab = `bg-white text-black rounded-lg border-0 outline-0  py-2 px-10 duration-200`;
    const notActive = `text-white  py-2 px-10 duration-200`;

    return (
        <section className="bg-white text-black pt-10">
            <Tab.Group >
                <section className="flex justify-center items-center mb-10">
                    <Tab.List className="flex p-2 rounded-lg bg-[#0f172a] ">
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
                    <Tab.Panel className='py-20 text-center bg-[#0f172a] text-white text-3xl'>
                        Class Six Students</Tab.Panel>
                    <Tab.Panel className='py-20 text-center bg-[#0f172a] text-white text-3xl'>
                        Class Seven Students</Tab.Panel>
                    <Tab.Panel className='py-20 text-center bg-[#0f172a] text-white text-3xl'>
                        Class Eight Students</Tab.Panel>
                    <Tab.Panel className='py-20 text-center bg-[#0f172a] text-white text-3xl'>
                        Class Nine Students</Tab.Panel>
                    <Tab.Panel className='py-20 text-center bg-[#0f172a] text-white text-3xl'>
                        Class Ten Students</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    );
};

export default AllStudents;