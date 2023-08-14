import { Children, createContext, useState, Dispatch, SetStateAction } from "react";

interface ProfileContextInterface {
    userAllData: string | null;
    setUserAllData: Dispatch<SetStateAction<string | null>>;
}

const defaultValue = {
    userAllData: null,
    setUserAllData: ()=>{}
}

export const ProfileContext = createContext<ProfileContextInterface>(defaultValue);

interface ProfileProviderInterface {
    children: JSX.Element;
};

export const ProfileProvider = ({ children }: ProfileProviderInterface) => {
    const [userAllData, setUserAllData] = useState<string | null>(defaultValue.userAllData);

    return (
        <ProfileContext.Provider
            value={{
                userAllData,
                setUserAllData
            }
            }
        >
            {children}
        </ProfileContext.Provider>
    )
}