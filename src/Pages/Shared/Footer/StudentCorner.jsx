import { Link } from "react-router-dom";

const StudentCorner = () => {
    return (
        <section>
            <div className="relative">
                <div className="relative">
                    <h1 className="font-Nunito text-2xl font-semibold text-white ">
                        Student Corner
                    </h1>
                    <div className="bottom"></div>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex flex-col gap-4">
                    <Link to="/our-students" className="footer-link">Our Student</Link>
                    <a href="#" className="footer-link">Fees Payment</a>
                    <a href="#" className="footer-link">Dress Info</a>
                    <a href="#" className="footer-link">Class Routine</a>
                    <a href="#" className="footer-link">Exam Routine</a>
                    <a href="#" className="footer-link">Events</a>
                    <a href="#" className="footer-link">General Photos</a>
                    <a href="#" className="footer-link">General Videos</a>
                </div>
            </div>
        </section>
    );
};


export default StudentCorner;