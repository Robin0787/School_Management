import Container from "../../../Components/Container";
import About from "./About";
import AcademicInfo from "./AcademicInfo";
import Admission from "./Admission";
import CoCurriculum from "./CoCurriculum";
import Facilities from "./Facilities";
import Gallery from "./Gallery";
import HeadTeacher from "./HeadTeacher";
import ImportantLinks from "./ImportantLinks";
import NoticeBoard from "./NoticeBoard";
import Result from "./Result";
import StudentCorner from "./StudentCorner";


const Sections = () => {
    return (
        <Container>
            <section className="flex flex-col md:flex-row gap-8 justify-between items-start p-2">
                <section className="w-full md:w-[70%] ">
                    <section className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-8 ">
                        <About />
                        <AcademicInfo />
                        <StudentCorner />
                        <Facilities />
                        <Result />
                        <Admission />
                        <Gallery />
                        <CoCurriculum />
                    </section>
                </section>
                <section className="w-full md:w-[30%]">
                    <section className="shadow-[0_0_15px] shadow-gray-200 dark:shadow-none dark:bg-[#121f3a] px-6 py-4">
                        <HeadTeacher />
                        <NoticeBoard />
                        <ImportantLinks />
                    </section>
                </section>
            </section>
        </Container>
    );
};

export default Sections;