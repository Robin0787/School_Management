import React, { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { LiaHomeSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { providerContext } from "../../Provider/Provider";
import logo from "../../assets/logo-2.png";

const SideMenu = () => {
    const { user, logOutUser, theme, handleThemeSwitch } = useContext(providerContext);

    const active = 'flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded shadow-[0px_0px_2px] shadow-white duration-300 group';
    const notActive = 'flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded hover:shadow-[0px_0px_1px] shadow-black duration-300 group';

    return (
        <section className={`bg-gradient-to-r from-[#0f172a] to-[#0f1c3a] text-gray-100 
                h-screen w-full duration-500`}>
            <article className="flex flex-col h-full py-3">
                <div className="flex justify-between items-center p-2">
                    <img src={logo} alt="logo" className=" object-cover w-24 mx-auto " />
                </div>
                <div
                    className="flex mt-10 md:mt-4 flex-col gap-4 relative px-2">
                    <NavLink
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500  delay-0`}>Home</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Home</p>
                    </NavLink>
                </div>
                <div className="px-4 mt-10 flex-grow">
                    <hr className="border-gray-400" />
                </div>
                <div
                    className="flex md:mt-4 flex-col gap-4 relative px-2">
                    <Link to={'/'}
                        className={notActive}>
                        <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500  delay-0`}>Home</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Home</p>
                    </Link>
                    <button
                        className="flex gap-3.5 items-center text-sm font-medium pl-4 py-0 lg:py-3 lg:px-4 rounded hover:shadow-[0px_0px_1px] shadow-black duration-300group" onClick={handleThemeSwitch}>
                        {
                            theme === 'dark' ?
                                <BsFillSunFill size={open ? 20 : 40} /> :
                                <BsFillMoonStarsFill size={open ? 20 : 40} />
                        }
                        <span className={`whitespace-pre duration-500 capitalize  delay-300`}>{theme}</span>
                    </button>
                    <Link
                        className={notActive}>
                        {
                            user?.photoURL ?
                                <img src={user.photoURL} className="h-6 w-6 ring-2 ring-gray-100 rounded-full" />
                                : <div>{React.createElement(BiUser, { size: '20' })}</div>
                        }
                        <span className={`whitespace-pre duration-500  delay-200`}>Profile</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Profile</p>
                    </Link>
                    <button
                        onClick={() => { logOutUser() }}
                        className={notActive}>
                        <div>{React.createElement(AiOutlineLogout, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500  delay-300`}>Log Out</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Log Out</p>
                    </button>
                </div>
            </article>
        </section>
    );
};

export default SideMenu;