import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import useLocalStorage from "./use-localStorage";
import jwt_decode from "jwt-decode";
import AuthService from "../service/auth-service";

interface Token {
    fullName: string;
    email: string;
}

const useAuth = () => {
    const {
        fullName,
        setFullName,
        email,
        setEmail,
        isAuthenticated,
        setIsAuthenticated,
        accessToken,
        setAccessToken
    } = useContext(AuthContext);

    const [localToken, setLocalToken] = useLocalStorage<string | null>("Token", null);

    const login = (accessToken: string) => {
        const { fullName, email } = jwt_decode<Token>(accessToken);
        // console.log("useAuth login funcion")
        // console.log(accessToken," useAuth login funcion")
        setFullName(fullName);
        setEmail(email);
        setIsAuthenticated(true);
        setLocalToken(accessToken);
        setAccessToken(accessToken);
    }
    // console.log(accessToken, "useAuth")

    const logout = async()=>{
        const accessToken = localStorage.getItem("Token");
        // console.log(accessToken);
        if(!accessToken) return;
        try {
            const response = await AuthService.logout(accessToken);
            if(response){
                destroyAuth();
            }
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    const destroyAuth = () => {
        setAccessToken(null);
        setFullName(null);
        setEmail(null);
        setIsAuthenticated(false);
        localStorage.clear();
    };

    return {
            fullName,
            email,
            isAuthenticated,
            accessToken,
            login,
            setEmail,
            setFullName,
            setIsAuthenticated,
            setAccessToken,
            logout,
        };
};

export default useAuth;