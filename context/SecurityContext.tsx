import React, { createContext, useContext, ReactNode, useState, useCallback } from "react";

type Values = {
  isAuthenticated: boolean,
  handleLogin: (email: string, password: string) => void,
  handleLogout: () => void,
}

type Props = {
  children?: ReactNode | undefined;
}

const SecurityContext = createContext<Values | null>(null)

export const SecurityContextProvider = ({ children, ...props }: Props) => {
  const [isAuthenticated, setIsAuthenticate] = useState(false);
  const handleLogin = useCallback((email: string, password: string) => setIsAuthenticate(prev => !prev), [])
  const handleLogout = useCallback(() => setIsAuthenticate(prev => !prev), [])

  return (
    <SecurityContext.Provider {...props} value={{
      isAuthenticated,
      handleLogin,
      handleLogout,
    }}>
      {children}
    </SecurityContext.Provider>
  )
}

export const useSecurityContext = () => {
  const ctx = useContext(SecurityContext);
  if (!ctx) {
    throw Error('The `useSecurityContext` hook must be called from a descendent of the `SecurityContext`.');
  }

  return {
    isAuthenticated: ctx.isAuthenticated,
    onLogin: ctx.handleLogin,
    onLogout: ctx.handleLogout,
  }
}