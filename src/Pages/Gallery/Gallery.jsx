import AOS from "aos";
import { useContext, useEffect } from "react";
import Container from "../../Components/Container";
import { providerContext } from "../../Provider/Provider";
import getRandomAnimation from "../../helper/getRandomAnimation";
import galleryStyles from './Gallery.module.css';


const images = [
    {
        id: 1,
        img: "https://img.freepik.com/free-photo/group-students-throwing-books-air_23-2148199291.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 2,
        img: "https://img.freepik.com/free-photo/students-discussing-study-object_23-2147844875.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 3,
        img: "https://img.freepik.com/free-photo/adventure-hike-people-concept-group-smiling-friends-forest-man-with-binoculars_1157-45174.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 4,
        img: "https://img.freepik.com/free-photo/group-young-beautiful-people-lie-grass-students-relax-after-classes-campus_496169-2322.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 5,
        img: "https://img.freepik.com/free-photo/students-park-watching-phone_23-2147656271.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 6,
        img: "https://img.freepik.com/free-photo/group-friends-talking-street-after-class_1301-4495.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 7,
        img: "https://img.freepik.com/free-photo/friends-with-guitar_1157-15875.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 8,
        img: "https://img.freepik.com/free-photo/medium-shot-teenage-friends-approving_23-2148225342.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 9,
        img: "https://img.freepik.com/free-photo/multiethnic-group-young-concentrated-students_171337-11715.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 10,
        img: "https://img.freepik.com/free-photo/smiling-students-studying-together-table_23-2147850724.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 11,
        img: "https://img.freepik.com/free-photo/multiethnic-group-young-concentrated-students_171337-11715.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 12,
        img: "https://img.freepik.com/free-photo/girl-scolding-her-classmate_1098-2806.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 13,
        img: "https://img.freepik.com/free-photo/students-sitting-stairs-gesturing-two-fingers-looking-camera_23-2148166406.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 14,
        img: "https://img.freepik.com/free-photo/cheerful-teenager-doing-homework-with-classmates_23-2147860732.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 15,
        img: "https://img.freepik.com/free-photo/group-students-doing-project_23-2148166343.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 16,
        img: "https://img.freepik.com/free-photo/adventure-travel-tourism-hike-people-concept-group-smiling-friends-forest-man-with-binocularus_1157-44556.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 17,
        img: "https://img.freepik.com/free-photo/boys-with-bags-girls-with-touristic-map-look-something-up-somewhere-old-city_8353-1633.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 18,
        img: "https://img.freepik.com/free-photo/smiley-students-lunch-time_23-2147650667.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 19,
        img: "https://img.freepik.com/free-photo/teens-relaxing-staircase_23-2147656107.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 20,
        img: "https://img.freepik.com/free-photo/cheerful-students-studying-stairs_23-2147860508.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 21,
        img: "https://img.freepik.com/free-photo/concentrated-students-studying-outdoors_171337-11751.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 22,
        img: "https://img.freepik.com/free-photo/group-students-sitting-tree_23-2148199297.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 23,
        img: "https://img.freepik.com/free-photo/cheerful-teenagers-doing-homework-cafe-table_23-2147860740.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    },
    {
        id: 24,
        img: "https://img.freepik.com/free-photo/schoolgirl-trying-cheat-during-test_1098-2795.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais"
    }
]

const Gallery = () => {
    const { setIsBgImgTrue } = useContext(providerContext);

    useEffect(() => {
        setIsBgImgTrue(false);
    });

    AOS.init();
    return (
        <section className="h-full w-full bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300">
            <section className="pt-24 pb-10 overflow-hidden">
                <Container>
                    <div className={galleryStyles.gallery}>
                        {
                            images.map((item, index) => (
                                <div key={item.id} className="w-full h-full overflow-hidden mb-3"
                                    data-aos={getRandomAnimation()} data-aos-delay='100' data-aos-once="false">
                                    <img className={galleryStyles.image} src={item.img} alt={`photo-${item.id}`} />
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </section>
        </section >
    );
};

export default Gallery;