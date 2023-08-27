import API from "./api";

const ProfileService = {
    update: (accessToken: string, payload: {
        pNumber: string,
    }) => {
        return API.post("/profile/phone", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    nameUpdate: (accessToken: string, payload: {
        fullName: string,
    }) => {
        return API.post("/profile/fullName", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    emailUpdate: (accessToken: string, payload: {
        newEmail: string,
    }) => {
        return API.post("/profile/email", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },
    phoneUpdate: (accessToken: string, payload: {
        pNumber: string,
    }) => {
        return API.post("/profile/phone", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },
    aboutUpdate: (accessToken: string, payload: {
        about: string,
    }) => {
        return API.post("/profile/about", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },
    skillUpdate: (accessToken: string, payload: {
        newSkill: string,
    }) => {
        return API.post("/profile/addskill", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },
    certificateUpdate: (accessToken: string, payload: {
        title: string,
        organisation: string
    }) => {
        return API.post("/profile/certificate", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },
    educationUpdate: (accessToken: string, payload: {
        organisation: string,
        degree: string,
        from: string,
        to: string,
        about: string
    }) => {
        return API.post("/profile/education", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    fetchAllData: (accessToken: string) => {
        return API.get("/profile/alldata", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
    },
    sendAllData: (accessToken: string, payload: {
        fullName: string;
        phone: string;
        skill: string;
        course: string;
        organisation: string;
        eOrganisation: string;
        from: string;
        to: string;
        eCourse: string;
        eAbout: string;
        about: string;
    }) => {
        return API.post("/firstData", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    }
}

export default ProfileService;