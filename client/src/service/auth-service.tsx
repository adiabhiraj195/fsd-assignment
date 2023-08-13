import API from "./api";

const accessToken = localStorage.getItem("Token");
const AuthService = {
    register: (payload: {
        fullName: string,
        email: string,
        password1: string,
        password2: string
    }) => {
        return API.post("/auth", payload);
    },

    login: (payload: {
        email: string,
        password: string
    }) => {
        return API.post("/auth/login", payload);
    },

    update: (payload: {
        pNumber: string,
    })=>{
        return API.post("/profile",payload,{
            headers: {Authorization: `Bearer ${accessToken}`}
        })
    }
}

export default AuthService;