import { useContext, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { CgMenu } from 'react-icons/cg';
import { GoBook } from 'react-icons/go';
import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import { providerContext } from "../../../Provider/Provider";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { user, theme, handleThemeSwitch, isBgImgTrue } = useContext(providerContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <div>
            <Container >
                <section className="relative flex justify-between items-center pt-5 pb-2 text-white">
                    <Link to={'/'} className="relative flex items-center gap-2 text-green-400">
                        <GoBook size={45} />
                        <GoBook size={30} className="absolute top-[7.5px] left-[8px]" />
                        <h1 className={`${styles.logo_name} relative bottom-[3px]`}>Sherlock</h1>
                    </Link>
                    {/* Navbar for medium and large devices */}
                    <section className="hidden md:flex items-center gap-10 ">
                        <Link to={'/our-students'} className={`${styles.nav_menu } ${isBgImgTrue ? "" : "text-black dark:text-white"}`}>
                            Our Students
                        </Link>
                        <Link to={'/teachers'} className={`${styles.nav_menu} ${isBgImgTrue ? "" : "text-black dark:text-white"}`}>
                            Teachers
                        </Link>
                        <Link to={'/gallery'} className={`${styles.nav_menu} ${isBgImgTrue ? "" : "text-black dark:text-white"}`}>
                            Gallery
                        </Link>
                        {/* <Link to={'/about-us'} className={`${styles.nav_menu} ${isBgImgTrue ? "" : "text-black dark:text-white"}`}>
                            About Us
                        </Link> */}
                        <button
                            className={`${isBgImgTrue ? "" : "text-black dark:text-white"}`} onClick={handleThemeSwitch}>
                            {theme === 'dark' ?
                                <BsFillSunFill size={20} /> :
                                <BsFillMoonStarsFill size={20} />}
                        </button>
                        {
                            user ?
                                <div className="relative">
                                    <div className={`min-w-[145px] ${showDropdown ? "rounded-t-md" : 'rounded-md'} flex justify-center items-center gap-3 px-3 py-1  bg-green-500 hover:shadow-[0_0_15px] hover:shadow-green-600 text-white cursor-pointer duration-200`}
                                        onClick={() => { setShowDropdown((prev) => !prev) }}
                                    >
                                        <img src={user?.photoURL} alt="" className="h-[28px] w-[28px] rounded-full" />
                                        <h1 className="">{user?.displayName}</h1>
                                    </div>
                                    <div className={`w-full ${showDropdown ? "h-10" : "h-0"} absolute top-full bg-[#0f172a] text-white rounded-b-md overflow-hidden duration-500`}>
                                        <div className="px-4 py-1">
                                            <Link to={'/dashboard'}>
                                                <div className={`${isBgImgTrue ? "" : "text-black dark:text-white"} ${styles.nav_menu} flex items-center gap-3`}>
                                                    <BiSolidDashboard size={20} />
                                                    <h1>Dashboard</h1>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                    <Link to={'/user/signUp'} className={`${isBgImgTrue ? "" : "text-black dark:text-white"} ${styles.nav_menu}`}>
                                        Sign Up
                                    </Link>
                                    <Link to={'/user/signIn'} className={`${isBgImgTrue ? "" : "text-black dark:text-white"} ${styles.nav_menu}`}>
                                        Sign In
                                    </Link>
                                </>
                        }
                    </section>
                    {/* Navbar for small devices */}
                    <section className="md:hidden text-white overflow-hidden">
                        <div className="cursor-pointer text-green-400 hover:text-green-500  duration-300" onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                            <CgMenu size={35} />
                        </div>
                        <div
                            className={`w-[100vw] overflow-hidden absolute -top-0 -left-[13px] z-50 ${openMobileMenu ? "h-[340px]" : "h-0"} 
                            flex justify-center items-center duration-500 border-b border-gray-700`}
                        >
                            <div className="w-full bg-[#0f172a] flex flex-col gap-3 items-center py-4">

                                <div className="bg-[#0f172a] text-green-400 hover:text-green-500 duration-300 cursor-pointer">
                                    <AiOutlineClose onClick={() => { setOpenMobileMenu(prev => !prev) }}
                                        size={30} />
                                </div>
                                <button
                                    className=""
                                    onClick={handleThemeSwitch}>
                                    {
                                        theme === 'dark' ?
                                            <BsFillSunFill size={20} /> :
                                            <BsFillMoonStarsFill size={20} />
                                    }
                                </button>
                                <Link to="/" className={`${styles.nav_menu}`} onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                                    Home
                                </Link>
                                <Link to="/our-students" className={`${styles.nav_menu}`} onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                                    Our Students
                                </Link>
                                <Link to="/teachers" className={`${styles.nav_menu}`} onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                                    Teachers
                                </Link>
                                <Link to={'/gallery'} className={`${styles.nav_menu}`} onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                                    Gallery
                                </Link>
                                {/* <Link to="/about-us" className={`${styles.nav_menu}`} onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                                    About Us
                                </Link> */}
                                {
                                    user ?
                                        <Link to={'/dashboard'} onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                                            <div className={`${styles.nav_menu} flex items-center gap-3`}>
                                                <BiSolidDashboard size={20} />
                                                <h1>Dashboard</h1>
                                            </div>
                                        </Link>
                                        :
                                        <>
                                            <Link to={'/user/signUp'} className={`${styles.nav_menu}`}>
                                                Sign Up
                                            </Link>
                                            <Link to={'/user/signIn'} className={`${styles.nav_menu}`}>
                                                Sign In
                                            </Link>
                                        </>
                                }
                            </div>
                        </div>
                    </section>
                </section>
            </Container>
        </div>
    );
};

export default Navbar;