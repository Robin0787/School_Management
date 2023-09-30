import { useContext } from "react";
import ContentLoader from "../../Components/ContentLoader/ContentLoader";
import { providerContext } from "../../Provider/Provider";
import AdminHome from "./AdminHome";
import InstructorHome from "./InstructorHome";
import StudentHome from "./StudentHome";

const DashboardHome = () => {
    const {userRole, userLoading} = useContext(providerContext);

    if(userLoading) {
        return <section className="w-full"><ContentLoader /></section>
    }
    if(userRole === 'admin') {
        return <section className="w-full"><AdminHome /></section>
    }
    if(userRole === 'instructor') {
        return <section className="w-full"><InstructorHome /></section>
    }
    if(userRole === 'student') {
        return <section className="w-full"><StudentHome /></section>
    }

    return <section className="w-full"><ContentLoader /></section>
};

export default DashboardHome;