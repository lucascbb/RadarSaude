import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type GlobalContextType = {
    usersUpdate: boolean;
    setUsersUpdate: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [usersUpdate, setUsersUpdate] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ usersUpdate, setUsersUpdate }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
