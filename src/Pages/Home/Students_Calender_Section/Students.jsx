import { Tab } from '@headlessui/react';
import Calender from "../../../Components/Calender/Calender";
import Container from "../../../Components/Container";

const Students = () => {
    return (
        <Container>
            <section className="grid grid-cols-1 md:grid-cols-[1fr_4fr] 
                lg:grid-cols-[1fr_4fr_2fr] gap-5 lg:gap-0 justify-between">
                <Tab.Group >
                    <Tab.List className={'bg-transparent flex flex-col justify-start items-center gap-2 border dark:border-gray-600 rounded md:mt-2 lg:mr-5'}>
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
                    <Tab.Panels className={'md:mt-2'}>
                        <Tab.Panel className={'flex justify-center items-center text-white bg-blue-500 h-full'}>Class Six</Tab.Panel>
                        <Tab.Panel className={'flex justify-center items-center text-white bg-orange-500 h-full'}>Class Seven</Tab.Panel>
                        <Tab.Panel className={'flex justify-center items-center text-white bg-purple-500 h-full'}>Class Eight</Tab.Panel>
                        <Tab.Panel className={'flex justify-center items-center text-white bg-indigo-500 h-full'}>Class Nine</Tab.Panel>
                        <Tab.Panel className={'flex justify-center items-center text-white bg-sky-500 h-full'}>Class Ten</Tab.Panel>
                    </Tab.Panels>
                    <div className="flex justify-center items-center h-full w-full">
                        <Calender />
                    </div>
                </Tab.Group>
            </section>
        </Container>
    );
};

export default Students;