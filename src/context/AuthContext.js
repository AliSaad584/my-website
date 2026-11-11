import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signUp = (name, email) => {
        setUser({ name, email });
    };

    const login = (email) => {
        setUser({
            name: email.split("@")[0],
            email: email
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
