import API from "./api";

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
    }
}

export default AuthService;