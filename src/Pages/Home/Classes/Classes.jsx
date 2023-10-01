import AOS from 'aos';
import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import book2 from "../../../assets/Home/book-2.png";
import book3 from "../../../assets/Home/book-3.png";
import book4 from "../../../assets/Home/book-4.png";
import book5 from "../../../assets/Home/book-5.png";
import book1 from "../../../assets/Home/book.png";

const Classes = () => {
    AOS.init();
    return (
        <section  className="pt-16 overflow-hidden" >
            <Container>
                <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 capitalize">
                    <Link to={'/subjects/class/6'}
                        data-aos="fade-right" data-aos-delay="100"  data-aos-once="true" data-aos-mirror="false"
                        className="class-six">
                        <img src={book3} alt="book" className="h-20 w-20" />
                        <h3 className="text-lg  text-center font-semibold">Class Six</h3>
                    </Link>
                    <Link to={'/subjects/class/7'}
                        data-aos="fade-right" data-aos-delay="50"  data-aos-once="true"  data-aos-mirror="false"
                        className="class-seven">
                        <img src={book2} alt="book" className="h-20 w-20" />
                        <h3 className="text-lg  text-center font-semibold">Class Seven</h3>
                    </Link>
                    <Link to={'/subjects/class/8'}
                        data-aos="zoom-in-down" data-aos-delay="200"  data-aos-once="true" data-aos-mirror="false"
                        className="class-eight">
                        <img src={book1} alt="book" className="h-20 w-20" />
                        <h3 className="text-lg  text-center font-semibold">Class Eight</h3>
                    </Link>
                    <Link to={'/subjects/class/9'}
                        data-aos="fade-left" data-aos-delay="50"  data-aos-once="true" data-aos-mirror="false"
                        className="class-nine">
                        <img src={book4} alt="book" className="h-20 w-20" />
                        <h3 className="text-lg  text-center font-semibold">Class Nine</h3>
                    </Link>
                    <Link to={'/subjects/class/10'}
                        data-aos="fade-left" data-aos-delay="100"  data-aos-once="true" data-aos-mirror="false"
                        className="class-ten">
                        <img src={book5} alt="book" className="h-20 w-20" />
                        <h3 className="text-lg  text-center font-semibold">Class Ten</h3>
                    </Link>
                </section>
            </Container>
        </section>
    );
};


export default Classes;