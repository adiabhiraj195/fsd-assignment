import { createContext, useState, Dispatch, SetStateAction } from "react";

interface ProfileContextInterface {
    // userAllData: {
    //     about: string,
    //     certificate: {
    //         title: string,
    //         organisation: string,
    //     },
    //     fullName:string,
    //     email: string,
    //     password: string,
    //     phone: number |string,
    //     skills: Array<string>,
    //     verificaionToken: string,
    //     __v: number,
    //     _id: string,
    //     experience: Array<object>
    // } | null;
    // setUserAllData: Dispatch<SetStateAction<any>>;
    fullNamePopup: boolean;
    setFullNamePopup: Dispatch<SetStateAction<boolean>>;
    editPopupToggle: boolean;
    setEditPopupToggle: Dispatch<SetStateAction<boolean>>;
    emailPopup: boolean;
    setEmailPopup: Dispatch<SetStateAction<boolean>>;
    phonePopup: boolean;
    setPhonePopup: Dispatch<SetStateAction<boolean>>;
    aboutPopup: boolean;
    setAboutPopup: Dispatch<SetStateAction<boolean>>;
    oldAbout: string;
    setOldAbout: Dispatch<SetStateAction<string>>;
    skillPopup: boolean;
    setSkillPopup: Dispatch<SetStateAction<boolean>>;
    skills: Array<string>;
    setSkills: Dispatch<SetStateAction<string[]>>;
    certificatePopup: boolean;
    setCertificatePopup: Dispatch<SetStateAction<boolean>>;
    educationData: {
        from: string,
        to: string,
        organisation: string,
        degree: string,
        about: string,

    };
    setEducationData: Dispatch<SetStateAction<{
        from: string;
        to: string;
        organisation: string;
        degree: string;
        about: string;
    }>>;
    educationPopup: boolean;
    setEducationPopup: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
    // userAllData: null,
    // setUserAllData: () => { },
    fullNamePopup: false,
    setFullNamePopup: () => { },
    editPopupToggle: false,
    setEditPopupToggle: () => { },
    emailPopup: false,
    setEmailPopup: () => { },
    phonePopup: false,
    setPhonePopup: () => { },
    aboutPopup: false,
    setAboutPopup: () => { },
    oldAbout: "",
    setOldAbout: () => { },
    skillPopup: false,
    setSkillPopup: () => { },
    skills: [],
    setSkills: () => { },
    certificatePopup: false,
    setCertificatePopup: () => { },
    educationData: {
        from: "",
        to: "",
        organisation: "",
        degree: "",
        about: "",

    },
    setEducationData: ()=>{ },
    educationPopup: false,
    setEducationPopup:()=>{},
}

export const ProfileContext = createContext<ProfileContextInterface>(defaultValue);

interface ProfileProviderInterface {
    children: JSX.Element;
};

export const ProfileProvider = ({ children }: ProfileProviderInterface) => {
    // const [userAllData, setUserAllData] = useState(defaultValue.userAllData);
    const [editPopupToggle, setEditPopupToggle] = useState<boolean>(defaultValue.editPopupToggle);
    const [fullNamePopup, setFullNamePopup] = useState<boolean>(defaultValue.fullNamePopup);
    const [emailPopup, setEmailPopup] = useState<boolean>(defaultValue.emailPopup);
    const [phonePopup, setPhonePopup] = useState<boolean>(defaultValue.phonePopup);
    const [aboutPopup, setAboutPopup] = useState<boolean>(defaultValue.aboutPopup);
    const [oldAbout, setOldAbout] = useState<string>(defaultValue.oldAbout);
    const [skillPopup, setSkillPopup] = useState<boolean>(defaultValue.skillPopup);
    const [skills, setSkills] = useState<Array<string>>(defaultValue.skills);
    const [certificatePopup, setCertificatePopup] = useState<boolean>(defaultValue.certificatePopup);
    const [educationData, setEducationData] = useState(defaultValue.educationData);
    const [educationPopup, setEducationPopup] = useState<boolean>(defaultValue.educationPopup)

    return (
        <ProfileContext.Provider
            value={{
                // userAllData,
                // setUserAllData,
                fullNamePopup,
                setFullNamePopup,
                editPopupToggle,
                setEditPopupToggle,
                emailPopup,
                setEmailPopup,
                phonePopup,
                setPhonePopup,
                aboutPopup,
                setAboutPopup,
                oldAbout,
                setOldAbout,
                skillPopup,
                setSkillPopup,
                skills,
                setSkills,
                certificatePopup,
                setCertificatePopup,
                educationData,
                setEducationData,
                educationPopup,
                setEducationPopup,
            }
            }
        >
            {children}
        </ProfileContext.Provider>
    )
}