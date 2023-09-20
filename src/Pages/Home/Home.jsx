import Banner from "../../Components/Banner_Home/Banner";
import Give_Space from "../../Components/Give_Space";
import Classes from "./Classes/Classes";
import Introduction from "./Introduction/Introduction";

const Home = () => {
    return (
        <section>
            <Banner />
            <Classes />
            <Give_Space />
            <Introduction />
            <section className="pb-10"></section>
        </section>
    );
};

export default Home;