import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../pages/firebase";
import React from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };

    const googleSignOut = () => {
        signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); 
            console.log("User:", user);
        });
        return () => unsubscribe();
    }, []);

    
    
    return (
        <AuthContext.Provider value={{ googleSignIn, googleSignOut, user }}>
        {children}
        </AuthContext.Provider>
    );
    };

export const useAuth = () => useContext(AuthContext);