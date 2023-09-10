import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ApprovedStudentCard from "../../../../Components/ApprovedStudentCard/ApprovedStudentCard";
import HeaderTitle from "../../../../Components/HeaderTitle/HeaderTitle";
import Loader2 from "../../../../Components/Loader2/Loader2";
import { providerContext } from "../../../../Provider/Provider";


const ApprovedStudents = () => {
    const { setUserBannerText, userLoading } = useContext(providerContext);

    const { data: approved = {}, isLoading } = useQuery({
        queryKey: ['students-request'],
        disabled: !userLoading,
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/approved-students`
            const res = await axios.get(url);
            return res.data;
        }
    });

    console.log(approved);

    // Changing Banner Text;
    useEffect(() => {
        setUserBannerText('Students Request!');
    }, [setUserBannerText]);
    
    return (
        <section className="bg-white text-black dark:bg-[#0f172a] dark:text-white">
            <HeaderTitle h="lg:h-[35vh]" />
            <section className="bg-white text-black pt-10">
                <Tabs className={`text-center`}>
                    <TabList>
                        <Tab><h1 className="px-1 md:px-5 text-lg xl:text-xl">Six</h1></Tab>
                        <Tab><h1 className="px-1 md:px-5 text-lg xl:text-xl">Seven</h1></Tab>
                        <Tab><h1 className="px-1 md:px-5 text-lg xl:text-xl">Eight</h1></Tab>
                        <Tab><h1 className="px-1 md:px-5 text-lg xl:text-xl">Nine</h1></Tab>
                        <Tab><h1 className="px-1 md:px-5 text-lg xl:text-xl">Ten</h1></Tab>
                    </TabList>
                    <TabPanel>
                        {
                            isLoading ?
                                <Loader2 />
                                :
                                (
                                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                        {
                                            approved?.six?.map((item) => <ApprovedStudentCard item={item} key={item._id}/>)
                                        }
                                    </section>
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            isLoading ?
                                <Loader2 />
                                :
                                (
                                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-5 pb-8">
                                        {
                                            approved?.seven?.map((item) => <ApprovedStudentCard item={item} key={item._id}/>)
                                        }
                                    </section>
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            isLoading ?
                                <Loader2 />
                                :
                                (
                                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-5 pb-8">
                                        {
                                           approved?.eight?.map((item) => <ApprovedStudentCard item={item} key={item._id}/>)
                                        }
                                    </section>
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            isLoading ?
                                <Loader2 />
                                :
                                (
                                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-5 pb-8">
                                        {
                                            approved?.nine?.map((item) => <ApprovedStudentCard item={item} key={item._id}/>)
                                        }
                                    </section>
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            isLoading ?
                                <Loader2 />
                                :
                                (
                                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-5 pb-8">
                                        {
                                            approved?.ten?.map((item) => <ApprovedStudentCard item={item} key={item._id}/>)
                                        }
                                    </section>
                                )
                        }
                    </TabPanel>
                </Tabs>
            </section>
        </section>
    );
};

export default ApprovedStudents;