import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";



export const providerContext = createContext(null);

const Provider = ({children}) => {
    const [userLoading, setUserLoading] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [user, setUser] = useState(null);
    const auth = new getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {
        setUserLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(currentUser);
                setUserLoading(false);
            }
        });

        return () => { unSubscribe() };
    }, [auth]);


    const values = {theme, setTheme , user, userLoading, createUser, logOutUser};
    return (
        <providerContext.Provider value={values}>
            {children}
        </providerContext.Provider>
    );
};

export default Provider;