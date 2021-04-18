import React, { useState, useContext, useEffect } from "react";

import { auth, googleProvider } from "../firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUserInfo, setCurrentUserInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [defaultId, setDefaultId] = useState(null);
  const googleSignIn = () => {
    return auth.signInWithPopup(googleProvider);
  };
  const logOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    fetch("https://fastpro-cleaning-services.herokuapp.com/defaultService")
      .then((res) => res.json())
      .then((data) => setDefaultId(data[0]._id));
  }, []);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetch(
          `https://fastpro-cleaning-services.herokuapp.com/isAdmin?email=${user.email}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              user.isAdmin = true;
              setCurrentUserInfo(user);
            } else {
              user.isAdmin = false;
              setCurrentUserInfo(user);
            }
          });
      }
      setCurrentUserInfo(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  const value = {
    currentUserInfo,
    logOut,
    googleSignIn,
    defaultId,
    setDefaultId,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
