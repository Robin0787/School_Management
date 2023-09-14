import React, { useContext, useEffect } from "react";
import { AiOutlineLogout, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoBook } from "react-icons/go";
import { LiaHomeSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { providerContext } from "../../Provider/Provider";

import GetRouteLinks from "../../Routes/GetRouteLinks/GetRouteLinks";

const SideMenu = ({ setOpenMenu }) => {
    const { user, logOutUser} = useContext(providerContext);
    
    const active = 'link flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded shadow-[0px_0px_4px] shadow-white duration-300 group';
    const notActive = 'link flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded hover:shadow-[0px_0px_4px] hover:shadow-gray-400 duration-300 group';

    useEffect(() => {
        if (setOpenMenu) {
            const links = document.querySelectorAll('.link');
            links.forEach(item => {
                item.addEventListener('click', () => { setOpenMenu(false) });
            })
        }
    }, [setOpenMenu]);

    return (
        <section id="sideMenu" className={`bg-gradient-to-r from-[#0f172a] to-[#0f1c3a] text-gray-100 
                h-screen overflow-y-scroll w-full duration-500 `}>
            <article className="flex flex-col h-full py-3">
                <div className="flex justify-center items-center my-5 link">
                    <Link className="relative flex items-center gap-2 text-green-400">
                        <GoBook size={80} />
                        <GoBook size={60} className="absolute top-[10px] left-[10px]" />
                    </Link>
                </div>
                {/* Routes based on user Role */}
                <div className="flex mt-10 md:mt-4 flex-col gap-4 relative px-2">
                    <NavLink
                        to={'home'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                        <span className={`whitespace-pre`}>Home</span>
                    </NavLink>
                    <GetRouteLinks />
                </div>
                <div className="px-4 mt-8 flex-grow">
                    <hr className="border-gray-700" />
                </div>
                {/* Default Routes */}
                <section className="flex md:mt-4 flex-col gap-4 relative px-2">
                    <Link to={'/'}
                        className={notActive}>
                        <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                        <span className={`whitespace-pre`}>Home</span>
                    </Link>
                    {/* Dark White Theme Button */}
                    {/* <button
                        className="link flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded hover:shadow-[0px_0px_4px] hover:shadow-gray-400 duration-300 group" onClick={handleThemeSwitch}>
                        {
                            theme === 'dark' ?
                                <BsFillSunFill size={20} /> :
                                <BsFillMoonStarsFill size={20} />
                        }
                        <span className={`whitespace-pre capitalize `}>{theme}</span>
                    </button> */}
                    <Link
                        className={notActive}>
                        {
                            user?.photoURL ?
                                <img src={user.photoURL} className="h-6 w-6 ring-2 ring-gray-100 rounded-full" />
                                : <div>{React.createElement(BiUser, { size: '20' })}</div>
                        }
                        <span className={`whitespace-pre duration-500  delay-200`}>Profile</span>
                    </Link>
                    <button
                        className={`${notActive} lg:hidden`}>
                        <div>{React.createElement(AiOutlineMenuUnfold, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500  delay-300`}>Close Menu</span>
                    </button>
                    <button
                        onClick={() => { logOutUser() }}
                        className={notActive}>
                        <div>{React.createElement(AiOutlineLogout, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500  delay-300`}>Log Out</span>
                    </button>
                </section>
            </article>
        </section>
    );
};

export default SideMenu;