import Container from "../../../Components/Container";
import About from "./About";


const Sections = () => {
    return (
        <Container>
            <section className="flex flex-col md:flex-row gap-10 justify-between items-start p-2">
                <section className="w-full md:w-[70%]">
                    <section className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
                        <About />
                        <div className="h-10 border rounded"></div>
                        <div className="h-10 border rounded"></div>
                        <div className="h-10 border rounded"></div>
                        <div className="h-10 border rounded"></div>
                        <div className="h-10 border rounded"></div>
                    </section>
                </section>
                <section className="w-full md:w-[30%] h-10 border">
                    <section>

                    </section>
                </section>
            </section>
        </Container>
    );
};

export default Sections;