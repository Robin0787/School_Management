

const SingleBookCard = ({ subject }) => {
    return (
        <div
            className='pr-5 w-full rounded-md flex justify-start items-center gap-5 bg-green-500  bg-opacity-0  border hover:border-green-500 hover:shadow-md hover:bg-opacity-10 overflow-hidden hover:scale-105 dark:hover:border-green-500 dark:border-gray-600 duration-300 group'>
            <img src={subject.image} alt="book" 
            className="w-[45%] rounded-l group-hover:scale-110 duration-300" />
            <h1 className="text-center w-full">{subject.name}</h1>
        </div>
    );
};

export default SingleBookCard;