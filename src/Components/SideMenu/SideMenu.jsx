import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CgGoogleTasks } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { providerContext } from "../../Provider/Provider";
import logo from "../../assets/Dashboard/logo-2.png";

const SideMenu = () => {
    const { user, logOutUser } = useContext(providerContext);
    const [open, setOpen] = useState(true);

    const closeOpenMenuButton = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1024) {
            setOpen(false);
        } else if (windowWidth >= 1024) {
            setOpen(true);
        }
    };

    useEffect(() => {
        closeOpenMenuButton();
        window.addEventListener('resize', closeOpenMenuButton);
        return () => {
            window.removeEventListener('resize', closeOpenMenuButton);
        };
    }, []);

    const active = 'flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded-md bg-indigo-700 duration-100 group';
    const notActive = 'flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded-md hover:bg-indigo-800 duration-100 group';

    return (
        <section className={`bg-gradient-to-r from-indigo-800 to-indigo-900 text-gray-100 h-screen 
        ${open ? 'w-60' : 'w-16'} duration-500`}>
            <article className="flex flex-col h-full py-3">
                <div className="flex justify-between items-center p-2">
                    <img src={logo} alt="logo" className="ring-1 ring-white object-cover w-32 mx-auto rounded-full" />
                </div>
                <div
                    className="flex mt-10 md:mt-4 flex-col gap-4 relative px-2">
                    <NavLink to={'/'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-0`}>Home</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Home</p>
                    </NavLink>
                    <NavLink to={'/my-tasks'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(FaTasks, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-75`}>My Tasks</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >My Tasks</p>
                    </NavLink>
                    <NavLink to={'/add-task'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(CgGoogleTasks, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-100`}>Add Task</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Add Task</p>
                    </NavLink>
                </div>
                <div className="px-4 mt-10 flex-grow">
                    <hr className="border-gray-400" />
                </div>
                <div
                    className="flex md:mt-4 flex-col gap-4 relative px-2">
                    {
                        user && (<Link
                            to={'/profile'}
                            className={notActive}>
                            {
                                user?.photoURL ?
                                    <img src={user.photoURL} className="h-6 w-6 ring-2 ring-gray-100 rounded-full" />
                                    : <div>{React.createElement(BiUser, { size: '20' })}</div>
                            }
                            <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-200`}>Profile</span>
                            <p
                                className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                            >Profile</p>
                        </Link>)
                    }
                    {
                        user && (
                            <button
                                onClick={() => { logOutUser() }}
                                className={notActive}>
                                <div>{React.createElement(AiOutlineLogout, { size: '20' })}</div>
                                <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-300`}>Log Out</span>
                                <p
                                    className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                                >Log Out</p>
                            </button>
                        )
                    }
                </div>
            </article>
        </section>
    );
};

export default SideMenu;