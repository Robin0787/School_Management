import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ApprovedStudentCard from "../../../../Components/ApprovedStudentCard/ApprovedStudentCard";
import ContentLoader from "../../../../Components/ContentLoader/ContentLoader";
import { providerContext } from "../../../../Provider/Provider";


const ApprovedStudents = () => {
    const { setUserBannerText, userLoading } = useContext(providerContext);

    const { data: approved = {}, isLoading } = useQuery({
        queryKey: ['approved-students'],
        disabled: !userLoading,
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/approved-students`
            const res = await axios.get(url);
            return res.data;
        }
    });


    // Changing Banner Text;
    useEffect(() => {
        setUserBannerText('Approved Students');
    }, [setUserBannerText]);

    return (
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
                                <ContentLoader />
                                :
                                (
                                    (
                                        approved.six ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    approved?.six?.map((item) => <ApprovedStudentCard item={item} key={item._id} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No request is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                    {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        approved.seven ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    approved?.seven?.map((item) => <ApprovedStudentCard item={item} key={item._id} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No request is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                    {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        approved.eight ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    approved?.eight?.map((item) => <ApprovedStudentCard item={item} key={item._id} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No request is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                    {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        approved.nine ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    approved?.nine?.map((item) => <ApprovedStudentCard item={item} key={item._id} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No request is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                    {
                            isLoading ?
                                <ContentLoader />
                                :
                                (
                                    (
                                        approved.ten ?
                                            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5 p-5 pb-8">
                                                {
                                                    approved?.ten?.map((item) => <ApprovedStudentCard item={item} key={item._id} />)
                                                }
                                            </section>
                                            :
                                            <section className="flex justify-center items-center h-[35vh]">
                                                <h1 className="text-xl font-bold">No request is available!</h1>
                                            </section>
                                    )
                                )
                        }
                    </TabPanel>
                </Tabs>
            </section>
    );
};

export default ApprovedStudents;