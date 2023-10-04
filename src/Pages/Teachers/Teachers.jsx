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
      name: "John Smith",
      img: instructor1,
      location: "New York, NY",
      age: 35,
      phone: "+1 (123) 456-7890",
      subject: "Mathematics",
      email: "john.smith@example.com",
      qualification: "Master's in Mathematics",
      experience_years: 8
    },
    {
      name: "Alice Johnson",
      img: instructor2,
      location: "Los Angeles, CA",
      age: 28,
      phone: "+1 (987) 654-3210",
      subject: "Science",
      email: "alice.johnson@example.com",
      qualification: "Bachelor's in Biology",
      experience_years: 5
    },
    {
      name: "David Wilson",
      img: instructor3,
      location: "Chicago, IL",
      age: 40,
      phone: "+1 (567) 890-1234",
      subject: "History",
      email: "david.wilson@example.com",
      qualification: "Ph.D. in History",
      experience_years: 12
    },
    {
      name: "Emily Davis",
      img: instructor4,
      location: "Houston, TX",
      age: 32,
      phone: "+1 (234) 567-8901",
      subject: "English",
      email: "emily.davis@example.com",
      qualification: "Master's in English Literature",
      experience_years: 7
    },
    {
      name: "Michael Brown",
      img: instructor5,
      location: "San Francisco, CA",
      age: 45,
      phone: "+1 (345) 678-9012",
      subject: "Physics",
      email: "michael.brown@example.com",
      qualification: "Ph.D. in Physics",
      experience_years: 15
    },
    {
      name: "Sarah Johnson",
      img: instructor6,
      location: "Miami, FL",
      age: 30,
      phone: "+1 (678) 901-2345",
      subject: "Chemistry",
      email: "sarah.johnson@example.com",
      qualification: "Master's in Chemistry",
      experience_years: 6
    },
    {
      name: "Robert Miller",
      img: instructor7,
      location: "Seattle, WA",
      age: 38,
      phone: "+1 (789) 012-3456",
      subject: "Art",
      email: "robert.miller@example.com",
      qualification: "Bachelor's in Fine Arts",
      experience_years: 9
    },
    {
      name: "Linda Clark",
      img: instructor8,
      location: "Boston, MA",
      age: 34,
      phone: "+1 (890) 123-4567",
      subject: "Music",
      email: "linda.clark@example.com",
      qualification: "Master's in Music",
      experience_years: 8
    },
    {
      name: "Mark Davis",
      img: instructor9,
      location: "Philadelphia, PA",
      age: 36,
      phone: "+1 (012) 345-6789",
      subject: "Physical Education",
      email: "mark.davis@example.com",
      qualification: "Bachelor's in Physical Education",
      experience_years: 7
    },
    {
      name: "Jennifer Wilson",
      img: instructor10,
      location: "Dallas, TX",
      age: 29,
      phone: "+1 (234) 567-8901",
      subject: "Computer Science",
      email: "jennifer.wilson@example.com",
      qualification: "Ph.D. in Computer Science",
      experience_years: 6
    }
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