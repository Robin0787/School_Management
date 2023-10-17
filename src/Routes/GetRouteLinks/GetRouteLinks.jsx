import React, { useContext } from "react";
import { AiOutlineNotification } from "react-icons/ai";
import { FaUserGraduate, FaUsersSlash } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { LuUserCheck } from "react-icons/lu";
import { TbUsers, TbUsersPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { providerContext } from "../../Provider/Provider";

const GetRouteLinks = () => {
    const { userRole, userLoading } = useContext(providerContext);

    const active = 'link flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded shadow-[0px_0px_4px] shadow-white duration-300 group';
    const notActive = 'link flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded  hover:shadow-[0px_0px_4px] hover:shadow-gray-400 duration-300 group';

    if (userLoading) {
        return <Loader />
    }
    if (userRole === 'admin') {
        return (
            <>
                <NavLink
                    to={'instructors'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(TbUsers, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>All Instructors</span>
                </NavLink>
                <NavLink
                    to={'instructors-request'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(TbUsersPlus, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Instructors Request</span>
                </NavLink>
                <NavLink
                    to={'approved-instructors'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(LuUserCheck, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Approved Instructors</span>
                </NavLink>
                <NavLink
                    to={'rejected-instructors'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(FaUsersSlash, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Rejected Instructors</span>
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
                    <div>{React.createElement(TbUsers, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>All Students</span>
                </NavLink>
                <NavLink
                    to={'add-student'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(FiUserPlus, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Add Student</span>
                </NavLink>
                <NavLink
                    to={'add-notice'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(AiOutlineNotification, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Add Notice</span>
                </NavLink>
                <NavLink
                    to={'students-request'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(TbUsersPlus, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Students Request</span>
                </NavLink>
                <NavLink
                    to={'approved-students'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(LuUserCheck, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Approved Students</span>
                </NavLink>
                <NavLink
                    to={'rejected-students'}
                    className={({ isActive }) => isActive ? active : notActive}>
                    <div>{React.createElement(FaUsersSlash, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>Rejected Students</span>
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
                    <div>{React.createElement(FaUserGraduate, { size: '20' })}</div>
                    <span className={`whitespace-pre`}>My Info</span>
                </NavLink>
            </>
        )
    }
};

export default GetRouteLinks;