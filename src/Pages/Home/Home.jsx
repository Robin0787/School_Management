import Give_Space from "../../Components/Give_Space";
import Home_Banner from "../../Components/Home_Banner/Home_Banner";
import Our_Classes from "../../Components/Our_Classes/Our_Classes";


const Home = () => {
    return (
        <section className="py-5">
            <Home_Banner />
            <Give_Space />
            <Our_Classes />
            <Give_Space />
        </section>
    );
};

export default Home;