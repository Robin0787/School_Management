import { useContext, useState } from "react";
import { BiSolidDashboard } from 'react-icons/bi';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { CgMenu } from 'react-icons/cg';
import { GoBook } from 'react-icons/go';
import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import { providerContext } from "../../../Provider/Provider";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { user, theme, handleThemeSwitch } = useContext(providerContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <>
            <Container>
                <section className="relative flex justify-between items-center pt-5 pb-2 text-white">
                    <Link to={'/'} className="relative flex items-center gap-2 text-green-400">
                        <GoBook size={50} />
                        <GoBook size={30} className="absolute top-[10px] left-[10px]" />
                        <h1 className={styles.logo_name}>Sherlock</h1>
                    </Link>
                    {/* Navbar for medium and large devices */}
                    <section className="hidden md:flex items-center gap-10 ">
                        <Link className={`${styles.nav_menu}`}>
                            Gallery
                        </Link>
                        <Link to={'/about-us'} className={`${styles.nav_menu}`}>
                            About Us
                        </Link>
                        <button
                            className="" onClick={handleThemeSwitch}>
                            {theme === 'dark' ?
                                <BsFillSunFill size={20} /> :
                                <BsFillMoonStarsFill size={20} />}
                        </button>
                        {
                            user ?
                                <div className="relative">
                                    <div className={`${showDropdown ? "rounded-t-md" : 'rounded-md'} flex items-center gap-3 px-3 py-1  bg-green-500 hover:shadow-[0_0_15px] hover:shadow-green-600 text-white cursor-pointer duration-200`}
                                        onClick={() => { setShowDropdown((prev) => !prev) }}
                                    >
                                        <img src={user?.photoURL} alt="" className="h-[28px] w-[28px] rounded-full" />
                                        <h1 className="text-sm">{user?.displayName}</h1>
                                    </div>
                                    <div className={`w-full ${showDropdown ? "h-10" : "h-0"} absolute top-full bg-[#0f172a] text-white rounded-b-md overflow-hidden duration-500`}>
                                        <div className="px-4 py-1">
                                            <Link to={'/dashboard'}>
                                                <div className={`${styles.nav_menu} flex items-center gap-3`}>
                                                    <BiSolidDashboard size={20} />
                                                    <h1>Dashboard</h1>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
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
                    </section>
                    {/* Navbar for small devices */}
                    <section className="md:hidden text-white ">
                        <div className="cursor-pointer" onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                            <CgMenu size={35} />
                        </div>
                        <div
                            className={`w-full  overflow-hidden absolute top-[68px] left-0 right-4 ${openMobileMenu ? "h-[216px]" : "h-0"} 
                            flex justify-center items-center
                             rounded-md 
                            duration-500 `}
                        >
                            <div className="w-full bg-[#0f172a] flex flex-col gap-2 items-center py-4 border border-[#b1b1b1]">
                                <button
                                    className=""
                                    onClick={handleThemeSwitch}>
                                    {
                                        theme === 'dark' ?
                                            <BsFillSunFill size={20} /> :
                                            <BsFillMoonStarsFill size={20} />
                                    }
                                </button>
                                <Link className={`${styles.nav_menu}`}>
                                    Gallery
                                </Link>
                                <Link className={`${styles.nav_menu}`}>
                                    About Us
                                </Link>
                                {
                                    user ?
                                        <Link to={'/dashboard'}>
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
        </>
    );
};

export default Navbar;