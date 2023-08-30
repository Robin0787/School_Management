import { createContext } from "react";

export const providerContext = createContext(null);

const Provider = ({children}) => {



    const values = {};
    return (
        <providerContext.Provider value={values}>
            {children}
        </providerContext.Provider>
    );
};

export default Provider;