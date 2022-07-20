import { useState, createContext } from "react";

// The actual user value to be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// The container that allow all children comps to access its useState value
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
