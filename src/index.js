import React, { useContext, createContext, useState } from "react";
import { get } from "./util";
const authContext = createContext();

function useProviderAuth(options) {
  const { cookieKey } = options;
  const [authenticated, setAuthenticated] = useState(get(cookieKey) && true);
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
  const auth = useProviderAuth(options);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

export default useAuth;
