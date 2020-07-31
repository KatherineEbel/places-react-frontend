import { createContext } from 'react'

export const AuthContext = createContext({
  authorized: false,
  signIn: () => {},
  signOut: () => {},
})
