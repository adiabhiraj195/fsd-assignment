import API from "./api";

const ProfileService = {
    update: (accessToken: string, payload: {
        pNumber: string,
    }) => {
        return API.post("/profile/phone", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    nameUpdate : (accessToken: string, payload:{
        fullName: string,
    })=>{
        return API.post("/profile/fullName", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    emailUpdate : (accessToken: string, payload:{
        newEmail: string,
    })=>{
        return API.post("/profile/email", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },
    phoneUpdate : (accessToken: string, payload:{
        pNumber: string,
    })=>{
        return API.post("/profile/phone", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    fetchAllData: (accessToken: string)=>{
        return API.get("/profile/alldata", {
            headers: { Authorization: `Bearer ${accessToken}`}
        });
    },
}

export default ProfileService;