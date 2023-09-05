import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../pages/firebase";
import React from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null); // useStates para el token

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const googleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log("User:", user);

      if (user) {
        user.getIdTokenResult().then((idTokenResult) => { // Obtiene el token del usuario
          const token = idTokenResult.token; 
          setAccessToken(token); // Guarda el token cuando el usuario se loguea
          console.log("Token:", token);
        });
      } else {
        setAccessToken(null); // Quita el token cuando el usuario se desloguea
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, googleSignOut, user, accessToken }} // ahora podemos usar el token usando a la funcion useAuth
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
