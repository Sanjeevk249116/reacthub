import React, { useState } from "react";
import { createContext } from "react";
export const AuthContainerProvider = createContext();
function AuthContainer({ children }) {
  const [users, setUsers] = useState(false);
  return (
    <AuthContainerProvider.Provider value={{ users, setUsers }}>
      {children}
    </AuthContainerProvider.Provider>
  );
}

export default AuthContainer;
