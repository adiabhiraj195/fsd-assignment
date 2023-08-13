import { Dispatch, SetStateAction, createContext, useState } from "react";

interface AuthContextInterface {
    accessToken: string | null;
    setAccessToken: Dispatch<SetStateAction<string | null>>;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    fullName: string | null;
    setFullName: Dispatch<SetStateAction<string | null>>;
    email: string | null;
    setEmail: Dispatch<SetStateAction<string | null>>;
}

const defaultValue = {
    accessToken: null,
    setAccessToken: () => { },
    isAuthenticated: false,
    setIsAuthenticated: () => { },
    fullName: null,
    setFullName: () => { },
    email: null,
    setEmail: () => { }
};

export const AuthContext = createContext<AuthContextInterface>(defaultValue);

interface AuthProviderInterface {
    children: JSX.Element;
};

export const AuthProvider = ({ children }: AuthProviderInterface) => {
    const [accessToken, setAccessToken] = useState<string | null>(defaultValue.accessToken);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultValue.isAuthenticated);
    const [fullName, setFullName] = useState<string | null>(defaultValue.fullName);
    const [email, setEmail] = useState<string | null>(defaultValue.email);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                setAccessToken,
                isAuthenticated,
                setIsAuthenticated,
                fullName,
                setFullName,
                email,
                setEmail
            }}
        >
            {children}
        </AuthContext.Provider>
    )


}