import React, { Children, createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // make a user state
  const [user, setUser] = useState(null);
  // make a loader
  const [loading, setLoading] = useState(true);

  // get the provided auth from firebase
  const auth = getAuth(app);
  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // pop with google
  const provider = new GoogleAuthProvider();
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((res) => {
        const loggedUser = res.user;
        setUser(loggedUser);
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // sign in with google
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // pop up with github
  const githubProvider = new GithubAuthProvider();
  const signInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //   sign Out method
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // pass this value to the context
  const authInfo = {
    user,
    createUser,
    logIn,
    signInGoogle,
    signInGithub,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
