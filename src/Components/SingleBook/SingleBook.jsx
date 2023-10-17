import AOS from 'aos';

const getAnimationStyle = () => {
    const styles = ['fade-up', "fade-in", "fade-right", "fade-left", "flip-left", "flip-right", "flip-up", "flip-down", 'zoom-in', "zoom-out", "zoom-in-up", "zoom-in-down", "zoom-in-right", "zoom-in-left", ""];
    const min = 0;
    const max = styles.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    return styles[randomIndex];
}

const SingleBook = ({ subject }) => {
    AOS.init();
    return (
        <div data-aos={getAnimationStyle() || 'fade-left'} data-aos-mirror="false" data-aos-once="false" data-aos-delay="50"
        className='border dark:border-gray-600 rounded-md relative w-full md:w-[180px]  group overflow-hidden md:hover:scale-110 hover:shadow-md shadow-black dark:shadow-gray-600 duration-500'>
            <img src={subject?.image} alt="book" className='h-full w-full rounded' />
            <div className='-bottom-40 group-hover:bottom-0 absolute  bg-gray-900 text-white bg-opacity-70 p-3 flex justify-center items-center w-full duration-300 delay-50'>
                <h1 className='text-center'>{subject?.name}</h1>
            </div>
        </div>
    );
};

export default SingleBook; 