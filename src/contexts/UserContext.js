import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setuser] = useState({ user: "Ashiq" });
  const [loading, setLoading] = useState(true);

  //1. Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfileName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //veriyfy email using email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //Google sign in

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //logout

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // reset passowrd

  const restePassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
    return () => {
      unsbscribe();
      setLoading(false);
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    signIn,
    updateUserProfileName,
    verifyEmail,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
