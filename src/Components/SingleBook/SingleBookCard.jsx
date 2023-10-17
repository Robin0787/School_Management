import AOS from 'aos';

const getAnimationStyle = () => {
    const styles = ['fade-up', "fade-in", "fade-right", "fade-left", "flip-left", "flip-right", "flip-up", "flip-down", 'zoom-in', "zoom-out", "zoom-in-up", "zoom-in-down", "zoom-in-right", "zoom-in-left", ""];
    const min = 0;
    const max = styles.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    return styles[randomIndex];
}

const SingleBookCard = ({ subject }) => {
    AOS.init();
    return (
        <div
        data-aos={getAnimationStyle() || 'fade-left'} data-aos-mirror="false" data-aos-once="false" data-aos-delay="50"
            className='pr-5 w-full rounded-md flex justify-start items-center gap-5 bg-green-500  bg-opacity-0  border hover:border-green-500 hover:shadow-md hover:bg-opacity-10 overflow-hidden sm:hover:scale-105 dark:hover:border-green-500 dark:border-gray-600 duration-300 group'>
            <img src={subject?.image} alt="book" 
            className="w-[45%] rounded-l sm:group-hover:scale-105 duration-300" />
            <h1 className="text-center w-full">{subject?.name}</h1>
        </div>
    );
};

export default SingleBookCard;