import Container from "../../../Components/Container";
import school_kids from "../../../assets/Home/school_kids.jpg";

const Introduction = () => {
    return (
        <section className="bg-white text-black dark:bg-[#0f172a] dark:text-white">
            <section className="py-20">
                <Container>
                    <article className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
                        <div className="w-full md:w-1/2 space-y-5">
                            <h1 className="text-3xl md:text-4xl font-bold uppercase">Welcome To Our <span className="text-green-600">NAPHS</span></h1>
                            <p className="text-justify leading-[25px] text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nam in perspiciatis nulla asperiores odio laudantium maiores ea nostrum sunt non est illo facere aperiam beatae excepturi officia, ipsa voluptas necessitatibus laboriosam placeat. Soluta consequuntur aliquid nostrum tempora autem suscipit dolore! Doloribus odit earum consequuntur molestias corporis dolorem similique aperiam, deserunt assumenda perspiciatis eos, eius excepturi exercitationem possimus. Facere, fugit?</p>
                            <p className="text-justify leading-[25px] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, deserunt. Natus at minima corporis nihil optio illo ut cumque obcaecati?</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={school_kids} alt="" className="w-full md:w-[85%] h-full mx-auto object-cover object-center rounded-tl-[25%]  rounded-br-[25%]"/>
                        </div>
                    </article>
                </Container>
            </section>
        </section>
    );
};

export default Introduction;