import { useState, createContext, useEffect } from "react";
import {
  authChangeListener,
  createUserDoc,
} from "../Utils/Firebase/firebase.utils";

// The actual user value to be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// The container that allow all children comps to access its useState value
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = authChangeListener((user) => {
      if (user) createUserDoc(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
