import { InfinitySpin } from 'react-loader-spinner';

const ContentLoader = ({h = 'h-[50vh]'}) => {
    return (
        <section className={`${h} flex justify-center items-center bg-white`}>
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </section>
    );
};

export default ContentLoader;