import { useId } from "react";
import Container from "../../Components/Container";
import instructor1 from "../../assets/Instructors/instructor-1.jpg";
import instructor10 from "../../assets/Instructors/instructor-10.jpg";
import instructor2 from "../../assets/Instructors/instructor-2.jpg";
import instructor3 from "../../assets/Instructors/instructor-3.jpg";
import instructor4 from "../../assets/Instructors/instructor-4.jpg";
import instructor5 from "../../assets/Instructors/instructor-5.jpg";
import instructor6 from "../../assets/Instructors/instructor-6.jpg";
import instructor7 from "../../assets/Instructors/instructor-7.jpg";
import instructor8 from "../../assets/Instructors/instructor-8.jpg";
import instructor9 from "../../assets/Instructors/instructor-9.jpg";
import Navbar from "../Shared/Navbar/Navbar";
import TeacherCard from "./TeacherCard";



const data = [
    {
        name: 'Earl Hill',
        img: instructor1
    },
    {
        name: 'John Gray',
        img: instructor2
    },
    {
        name: 'Alan Baker',
        img: instructor3
    },
    {
        name: 'Billy Sanchez',
        img: instructor4
    },
    {
        name: 'Roy Jones',
        img: instructor5
    },
    {
        name: 'Edward Turner',
        img: instructor6
    },
    {
        name: 'Howard Martin',
        img: instructor7
    },
    {
        name: 'Harold Robinson',
        img: instructor8
    },
    {
        name: 'Shawn Thompson',
        img: instructor9
    },
    {
        name: 'Philip Allen',
        img: instructor10
    },
]

const Teachers = () => {
    return (
        <section className="min-h-screen">
            <section className="bg-[#0f172a] pb-2">
                <Navbar />
            </section>
            <section className="bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300">
                <Container>
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 py-10">
                        {
                            data.map((item) => <TeacherCard key={useId()} teacherInfo={item} />)
                        }
                    </section>
                </Container>
            </section>
        </section>
    );
};

export default Teachers;