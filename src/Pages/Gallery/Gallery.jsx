import Navbar from "../Shared/Navbar/Navbar";


const Gallery = () => {
    return (
        <section className="min-h-screen">
            <section className="bg-[#0f172a] pb-2">
                <Navbar />
            </section>
            <section className="flex justify-center items-center h-[calc(100vh-81px)]  bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300">
                <h1 className="text-3xl text-center capitalize">Welcome To Our Gallery</h1>
            </section>
        </section>
    );
};

export default Gallery;