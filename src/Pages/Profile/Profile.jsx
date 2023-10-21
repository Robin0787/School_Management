import Profiles from "./Profiles/Profiles";



const Profile = () => {
    return (
        <section className="h-full lg:h-[calc(100vh-35vh)]">
            <section className="h-full w-full bg-white text-black dark:bg-[#0f172a] dark:text-white duration-300">
                <Profiles />
            </section>
        </section>
    );
};

export default Profile;