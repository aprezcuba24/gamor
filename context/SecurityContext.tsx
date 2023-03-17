import React, { createContext, useContext, ReactNode, useState, useCallback } from "react";

type Values = {
  isAuthenticated: boolean,
  handleLogin: (email: string, password: string) => Promise<boolean>,
  handleRegister: (email: string, password: string) => void,
  handleLogout: () => void,
}

type Props = {
  children?: ReactNode | undefined;
}

const SecurityContext = createContext<Values | null>(null)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const SecurityContextProvider = ({ children, ...props }: Props) => {
  const [isAuthenticated, setIsAuthenticate] = useState(false);
  const handleLogin = useCallback(async (email: string, password: string) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password })
    })
    if (res.status === 404) {
      return false;
    }
    setIsAuthenticate(prev => !prev)
    return true;
  }, [])
  const handleLogout = useCallback(() => setIsAuthenticate(prev => !prev), [])
  const handleRegister = useCallback((email: string, password: string) => fetch('/api/users', {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password })
  }), [])

  return (
    <SecurityContext.Provider {...props} value={{
      isAuthenticated,
      handleLogin,
      handleLogout,
      handleRegister,
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
    onRegister: ctx.handleRegister,
  }
}