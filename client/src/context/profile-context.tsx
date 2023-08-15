import { Children, createContext, useState, Dispatch, SetStateAction } from "react";

interface ProfileContextInterface {
    userAllData: string | null;
    setUserAllData: Dispatch<SetStateAction<string | null>>;
    fullNamePopup: boolean;
    setFullNamePopup: Dispatch<SetStateAction<boolean>>;
    editPopupToggle: boolean;
    setEditPopupToggle: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
    userAllData: null,
    setUserAllData: () => { },
    fullNamePopup: false,
    setFullNamePopup: () => { },
    editPopupToggle: false,
    setEditPopupToggle: ()=>{},
}

export const ProfileContext = createContext<ProfileContextInterface>(defaultValue);

interface ProfileProviderInterface {
    children: JSX.Element;
};

export const ProfileProvider = ({ children }: ProfileProviderInterface) => {
    const [userAllData, setUserAllData] = useState<string | null>(defaultValue.userAllData);
    const [fullNamePopup, setFullNamePopup] = useState<boolean>(defaultValue.fullNamePopup);
    const [editPopupToggle, setEditPopupToggle] = useState<boolean>(defaultValue.editPopupToggle);

    return (
        <ProfileContext.Provider
            value={{
                userAllData,
                setUserAllData,
                fullNamePopup,
                setFullNamePopup,
                editPopupToggle,
                setEditPopupToggle,
            }
            }
        >
            {children}
        </ProfileContext.Provider>
    )
}