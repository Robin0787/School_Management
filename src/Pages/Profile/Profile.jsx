import { useContext } from "react";
import { providerContext } from "../../Provider/Provider";


const Profile = () => {
    const {user} = useContext(providerContext);
    return (
        <section className="h-screen flex justify-center items-center">
            <h1 className="text-center text-3xl uppercase">Welcome {user && user.displayName}</h1>
        </section>
    );
};

export default Profile;