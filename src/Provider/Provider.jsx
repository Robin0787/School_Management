import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import GetUserInfo from "../APIs/GetUserInfo";
import app from "../Firebase/firebase.init";



export const providerContext = createContext(null);

const Provider = ({children}) => {
    const [userLoading, setUserLoading] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState('');
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
                GetUserInfo(currentUser.email)
                .then(res => {
                    if(!res) {
                        setUserRole('');
                    }
                    else if(res.data) {
                        setUserRole(res.role);

                    }
                    console.log(res);
                })
            }else {
                setUser(null);
            }
        });

        return () => { unSubscribe() };
    }, []);


    const values = {theme, setTheme , user, userRole, userLoading, createUser, logOutUser};
    return (
        <providerContext.Provider value={values}>
            {children}
        </providerContext.Provider>
    );
};

export default Provider;