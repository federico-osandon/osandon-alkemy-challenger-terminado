import { createContext, useContext } from 'react'

export const contextAuth = createContext()

// Esta función es para el contexto ya inicializado
export const useContextAuth = () => useContext(contextAuth)


