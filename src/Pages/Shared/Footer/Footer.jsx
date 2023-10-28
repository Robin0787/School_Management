import Container from "../../../Components/Container";
import AcademicInfo from "./AcademicInfo";
import Facilities from "./Facilities";
import QuickLinks from "./QuickLinks";
import StudentCorner from "./StudentCorner";
import We from "./We";


const Footer = () => {
    return (
        <>
            <section className="bg-[#091124]">
                <Container>
                    <section className="bg-cover w-full py-20 footer" >
                        {/* Footer Top Section */}
                        <section className="bg-[#0c1730] w-full footer-top lg:w-[836px] mx-auto" >
                            <section className="py-[30px] px-12">
                                <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3">
                                    <div className="md:border-r border-[#ffffff1a] w-full md:w-1/3">
                                        <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">Call Us On :</h4>
                                        <h5 className="text-[18px] font-[700] text-primary text-center">+(880) 1799618056</h5>
                                    </div>
                                    <div className="md:border-r border-[#ffffff1a] w-full md:w-1/3">
                                        <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">Open Hours :</h4>
                                        <h5 className="text-[18px] font-[700] text-primary text-center">8.00 AM - 6.00 PM</h5>
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">Mail Us :</h4>
                                        <h5 className="text-[18px] font-[700] text-primary text-center">mohammadrobin636@gmail.com</h5>
                                    </div>
                                </section>
                            </section>
                        </section>
                        {/* Footer main section */}
                        <section className="mt-16">
                            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr_2fr_2fr_2fr] gap-5 md:gap-10">
                                <We />
                                <QuickLinks />
                                <StudentCorner />
                                <AcademicInfo />
                                <Facilities />
                            </section>
                        </section>
                    </section>
                </Container>
            </section>
            <section className="bg-[#070d1b] text-white py-5">
                <p className="text-center text-[16px] leading-[30px] text-muted">Copyrights © 2023 <span className="text-primary">Sherlock </span>. Developed by 
                <a href="https://robin-web-dev.netlify.app" rel="noreferrer" target="_blank" className="text-primary"> Robin Hossen</a></p>
            </section>
        </>
    );
};

export default Footer;