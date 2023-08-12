import API from "./api";

const AuthService = {
    register: (payload: {
        fullName: string,
        email: string,
        password1: string,
        password2: string
    })=>{
        return API.post("/auth", payload);
    }
}

export default AuthService;