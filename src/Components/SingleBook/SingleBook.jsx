

const SingleBook = ({ subject }) => {
    return (
        <div className='border dark:border-gray-600 rounded-md relative w-full md:w-[180px] mx-auto group overflow-hidden hover:scale-110 hover:shadow-md shadow-black dark:shadow-gray-600 duration-500'>
            <img src={subject.image} alt="book" className='h-full w-full rounded' />
            <div className='-bottom-40 group-hover:bottom-0 absolute  bg-gray-900 text-white bg-opacity-70 p-3 flex justify-center items-center w-full duration-300 delay-50'>
                <h1 className='text-center'>{subject.name}</h1>
            </div>
        </div>
    );
};

export default SingleBook; 