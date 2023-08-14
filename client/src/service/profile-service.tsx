import API from "./api";

const ProfileService = {
    update: (accessToken: string, payload: {
        pNumber: string,
    }) => {
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