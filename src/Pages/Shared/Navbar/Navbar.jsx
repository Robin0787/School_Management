import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import styles from "./Navbar.module.css";

const Navbar = () => {
    // theme state
    const [theme, setTheme] = useState('light');

    // if local storage is empty save theme as light
    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    useEffect(() => {
        // select html elem
        const html = document.querySelector('html');
        //add or remove class dark in html elem according to theme in localstorage.
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
        }
    }, [theme]);

    // handle switch theme
    const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark');
            document.documentElement.style.setProperty('--scrollbar-bg', '#0f172a');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.style.setProperty('--scrollbar-bg', '#ffffff');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <>
            <Container>
                <section className="flex justify-between items-center pt-5 pb-2">
                    <Link to={'/'} className="relative flex items-center gap-2 text-green-600 dark:text-green-400">
                        <GoBook size={50} />
                        <GoBook size={30} className="absolute top-[10px] left-[10px]" />
                        <h1 className={styles.logo_name}>Sherlock</h1>
                    </Link>
                    <div className="hidden md:flex items-center gap-10 ">
                        <Link className={`${styles.nav_menu} dark:before:bg-green-400`}>
                            Gallery
                        </Link>
                        <Link className={`${styles.nav_menu} dark:before:bg-green-400`}>
                            About Us
                        </Link>
                        <button
                            className="" onClick={handleThemeSwitch}>
                            {theme === 'dark' ?
                                <BsFillSunFill size={20} /> :
                                <BsFillMoonStarsFill size={20} />}
                        </button>
                        <Link to={'/user/signUp'} className={`${styles.nav_menu} dark:before:bg-green-400`}>
                            Sign Up
                        </Link>
                        <Link to={'/user/signIn'} className={`${styles.nav_menu} dark:before:bg-green-400`}>
                            Sign In
                        </Link>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default Navbar;