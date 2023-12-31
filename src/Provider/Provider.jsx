import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import GetUserInfo from "../APIs/GetUserInfo";
import app from "../Firebase/firebase.init";



export const providerContext = createContext(null);

const Provider = ({ children }) => {
    const [isBgImgTrue, setIsBgImgTrue] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    const [theme, setTheme] = useState('dark');
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState('');
    const [userStatus, setUserStatus] = useState('');
    const auth = new getAuth(app);
    const [userBannerText, setUserBannerText] = useState('Welcome Dear!');

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOutUser = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUserLoading(false);
                GetUserInfo(currentUser.email)
                    .then(res => {
                        if(!res) {
                            setUserRole('');
                            setUserStatus('pending');
                        } 
                        else {
                            setUserRole(res.role);
                            setUserStatus(res.status);
                        }
                    }).catch(err => console.log(err));
            } else {
                setUser(null);
                setUserLoading(false);
            }
        });

        return () => { unSubscribe() };
    }, []);


    // Theme related code --------------------
    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'dark');
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
    }, [theme, setTheme]);

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


    const values = { theme, setTheme, user, userRole, userStatus, userLoading, createUser, signInUser, logOutUser, handleThemeSwitch, userBannerText, setUserBannerText, isBgImgTrue, setIsBgImgTrue };
    return (
        <providerContext.Provider value={values}>
            {children}
        </providerContext.Provider>
    );
};

export default Provider;