import { createContext, useContext } from "react";

export type AuthData = {
  account: any;
  isAuthenticated?: boolean;
};

export interface Auth {
  auth: AuthData;
  setAuth: (auth: AuthData) => void;
}

export const AuthContext = createContext<Auth>({
  auth: {
    account: {},
    isAuthenticated: true,
  },
  setAuth: (auth: AuthData) => {
    return;
  },
});

export const useAuth = () => useContext(AuthContext);
