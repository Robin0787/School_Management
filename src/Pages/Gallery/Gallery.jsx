import AOS from "aos";
import { useContext, useEffect } from "react";
import Container from "../../Components/Container";
import { providerContext } from "../../Provider/Provider";
import img1 from "../../assets/Home/Banner/img-1.jpg";
import img2 from "../../assets/Home/Banner/img-2.jpg";
import img3 from "../../assets/Home/Banner/img-3.jpg";
import img4 from "../../assets/Home/Banner/img-4.jpg";
import img5 from "../../assets/Home/Banner/img-5.jpg";
import img6 from "../../assets/Home/Banner/img-6.jpg";
import getRandomAnimation from "../../helper/getRandomAnimation";
import galleryStyles from './Gallery.module.css';


const images = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },
    {
        id: 5,
        img: img1
    },
    {
        id: 6,
        img: img6
    },
    {
        id: 7,
        img: img4
    },
    {
        id: 8,
        img: img5
    },
    {
        id: 9,
        img: img3
    },
    {
        id: 10,
        img: img4
    },
    {
        id: 11,
        img: img1
    },
    {
        id: 12,
        img: img4
    },
    {
        id: 13,
        img: img5
    },
    {
        id: 14,
        img: img6
    },
    {
        id: 15,
        img: img2
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