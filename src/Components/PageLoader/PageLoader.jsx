import { InfinitySpin } from 'react-loader-spinner';

const PageLoader = () => {
    return (
        <section className="h-screen flex justify-center items-center bg-white dark:bg-[#0f172a]">
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </section>
    );
};

export default PageLoader;