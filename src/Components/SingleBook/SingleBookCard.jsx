import AOS from 'aos';
import getRandomAnimation from '../../helper/getRandomAnimation';


const SingleBookCard = ({ subject, index }) => {
    AOS.init();
    return (
        <div
        data-aos={getRandomAnimation() || 'fade-left'} data-aos-mirror="false" data-aos-once="false" data-aos-delay={index * 100}
            className='pr-5 w-full rounded-md flex justify-start items-center gap-5 bg-green-500  bg-opacity-0  border hover:border-green-500 hover:shadow-md hover:bg-opacity-10 overflow-hidden sm:hover:scale-105 dark:hover:border-green-500 dark:border-gray-600 duration-300 group'>
            <img src={subject?.image} alt="book" 
            className="w-[45%] rounded-l sm:group-hover:scale-105 duration-300" />
            <h1 className="text-center w-full">{subject?.name}</h1>
        </div>
    );
};

export default SingleBookCard;