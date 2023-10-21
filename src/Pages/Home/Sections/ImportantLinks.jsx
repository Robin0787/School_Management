import AOS from "aos";
import SingleLink from "../../../Components/SingleLink/SingleLink";

const links = [
    {
        title: "শিক্ষা বোর্ড ফলাফল",
        border: true,
        to: ""
    },
    {
        title: "মাধ্যমিক ও উচ্চশিক্ষা বোর্ড",
        border: true,
        to: ""
    },
    {
        title: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর",
        border: true,
        to: ""
    },
    {
        title: "বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস)",
        border: true,
        to: ""
    },
    {
        title: "শিক্ষা মন্ত্রণালয",
        border: true,
        to: ""
    },
    {
        title: "প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়",
        border: true,
        to: ""
    },
    {
        title: "মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ",
        border: true,
        to: ""
    },
    {
        title: "Dcampus",
        border: false,
        to: ""
    }
]

const ImportantLinks = () => {
    AOS.init();
    return (
        <section className="mt-10 w-full" data-aos="fade-left" data-aos-delay="0" data-aos-once="false" data-aos-mirror="false">
        <div className="relative">
                <h1 className="font-Nunito text-2xl font-semibold text-black dark:text-white ">
                    Important Links
                </h1>
                <div className="bottom"></div>
        </div>
        <section className="mt-10 flex flex-col justify-start items-start gap-3">
            {
                links?.map(((item, index) => <SingleLink key={index} item={item}/>))
            }
        </section>
        </section>
    );
};

export default ImportantLinks;