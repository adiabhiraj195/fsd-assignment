import { Children, createContext, useState, Dispatch, SetStateAction } from "react";

interface ProfileContextInterface {
    userAllData: string | null;
    setUserAllData: Dispatch<SetStateAction<string | null>>;
    fullNamePopup: boolean;
    setFullNamePopup: Dispatch<SetStateAction<boolean>>;
    editPopupToggle: boolean;
    setEditPopupToggle: Dispatch<SetStateAction<boolean>>;
    emailPopup:boolean;
    setEmailPopup: Dispatch<SetStateAction<boolean>>;
    phonePopup: boolean;
    setPhonePopup: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
    userAllData: null,
    setUserAllData: () => { },
    fullNamePopup: false,
    setFullNamePopup: () => { },
    editPopupToggle: false,
    setEditPopupToggle: ()=>{},
    emailPopup: false,
    setEmailPopup: ()=>{},
    phonePopup: false,
    setPhonePopup: ()=>{},
}

export const ProfileContext = createContext<ProfileContextInterface>(defaultValue);

interface ProfileProviderInterface {
    children: JSX.Element;
};

export const ProfileProvider = ({ children }: ProfileProviderInterface) => {
    const [userAllData, setUserAllData] = useState<string | null>(defaultValue.userAllData);
    const [editPopupToggle, setEditPopupToggle] = useState<boolean>(defaultValue.editPopupToggle);
    const [fullNamePopup, setFullNamePopup] = useState<boolean>(defaultValue.fullNamePopup);
    const [emailPopup, setEmailPopup] = useState<boolean>(defaultValue.emailPopup);
    const [phonePopup, setPhonePopup] = useState<boolean>(defaultValue.phonePopup);

    return (
        <ProfileContext.Provider
            value={{
                userAllData,
                setUserAllData,
                fullNamePopup,
                setFullNamePopup,
                editPopupToggle,
                setEditPopupToggle,
                emailPopup,
                setEmailPopup,
                phonePopup,
                setPhonePopup,
            }
            }
        >
            {children}
        </ProfileContext.Provider>
    )
}