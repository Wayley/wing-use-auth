import React, { useContext, createContext, useState } from "react";
const authContext = createContext();

function useProviderAuth(initialState) {
  const [authenticated, setAuthenticated] = useState(initialState);
  const signin = (cb) => {
    setAuthenticated(true);
    cb && cb();
  };

  const signout = (cb) => {
    setAuthenticated(false);
    cb && cb();
  };

  return {
    authenticated,
    signin,
    signout,
  };
}

export function AuthProvider({ children, options }) {
  const { initialState } = options;
  const auth = useProviderAuth(initialState);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}
