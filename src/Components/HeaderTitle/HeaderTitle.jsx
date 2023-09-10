import { useContext } from "react";
import { providerContext } from "../../Provider/Provider";
import img from "../../assets/Home/Banner/img-1.jpg";

const HeaderTitle = ({h='lg:h-[50vh]'}) => {
    const {userBannerText} = useContext(providerContext);

    return (
        <section className={`h-[40vh] ${h} bg-[#808080] bg-cover bg-center w-full`} style={{ backgroundImage: `url(${img})` }}>
            <section className='bg-gradient-to-r from-[#000000] to-90% to-[#00000010] h-full flex justify-center items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl whitespace-nowrap text-center font-thin italic text-white'>{userBannerText}</h1>
            </section>
        </section>
    );
};

export default HeaderTitle;