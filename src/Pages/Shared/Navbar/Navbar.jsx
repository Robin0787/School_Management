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
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <>
            <Container>
                <section className="flex justify-between items-center pt-5 pb-2">
                    <div className="relative flex items-center gap-2 text-green-600 dark:text-green-400">
                        <GoBook size={50} />
                        <GoBook size={30} className="absolute top-[10px] left-[10px]" />
                        <h1 className={styles.logo_name}>Sherlock</h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link className={`${styles.nav_menu} dark:before:bg-green-400`}>
                            About Us
                        </Link>
                        <button
                            className="text-lg px-3 py-2 rounded-md border" onClick={handleThemeSwitch}>
                            {theme === 'dark' ?
                                <BsFillSunFill size={20} /> :
                                <BsFillMoonStarsFill size={20} />}
                        </button>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default Navbar;