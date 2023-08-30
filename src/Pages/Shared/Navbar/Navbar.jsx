import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import logo from "../../../assets/logo.png";

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
        
        <Container>
                <div className="flex justify-between py-5">
                    <img src={logo} alt="logo" className="w-[200px]"/>
                    <button className="text-lg px-5 py-2 rounded-md border" onClick={handleThemeSwitch}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
                </div>
                <div className="flex justify-center items-center h-[20vh] w-full dark:bg-black dark:text-white duration-300">
                    <h1 className="text-5xl">Hello World!</h1>
                </div>
        </Container>
    );
};

export default Navbar;