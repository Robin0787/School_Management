import React, { useContext } from "react";
import { LiaHomeSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { providerContext } from "../../Provider/Provider";

const GetRouteLinks = () => {
    const { userRole, userLoading } = useContext(providerContext);

    const active = 'link flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded shadow-[0px_0px_2px] shadow-white duration-300 group';
    const notActive = 'link flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded hover:shadow-[0px_0px_1px] shadow-black duration-300 group';

    if (userLoading) {
        return <Loader />
    }
    if (userRole === 'admin') {
        return (
            <>
                <NavLink
                    to={'instructors'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Instructors</span>
                </NavLink>
            </>
        )
    }
    if (userRole === 'instructor') {
        return (
            <>
                <NavLink
                    to={'students'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Students</span>
                </NavLink>
            </>
        )
    }
    if (userRole === 'student') {
        return (
            <>
                <NavLink
                    to={'my-info'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>My Info</span>
                </NavLink>
            </>
        )
    }
};

export default GetRouteLinks;