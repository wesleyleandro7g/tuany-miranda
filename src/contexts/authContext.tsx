"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;

  token?: string;
  setToken: Dispatch<SetStateAction<string | undefined>>;
};

type AuthContextProviderType = {
  children: ReactNode | ReactNode[];
};

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => null,

  token: undefined,
  setToken: () => undefined,
});

export default function AuthContextProvider({
  children,
}: AuthContextProviderType) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, setToken, token }}>
      {children}
    </AuthContext.Provider>
  );
}
