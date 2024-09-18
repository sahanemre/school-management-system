import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {}

return <AppContext.Provider value={{}}></AppContext.Provider>

export const useGlobalContext = () => {
  return useContext(AppContext)
}
