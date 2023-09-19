import Give_Space from "../../Components/Give_Space";
import Our_Classes from "../../Components/Our_Classes/Our_Classes";

import Banner from "../../Components/Banner_Home/Banner";
import Introduction from "./Introduction/Introduction";

const Home = () => {
    return (
        <section>
            <Banner />
            <Introduction />
            <Give_Space />
            <Our_Classes />
            <Give_Space />
            <section className="pb-10"></section>
        </section>
    );
};

export default Home;