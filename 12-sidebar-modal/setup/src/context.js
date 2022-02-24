import React, { useState, useContext } from 'react'
import App from './App'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isModelOpen, setIsModelOpen] = useState(false)

  const openSidebar = () => {
    setIsSideBarOpen(true)
  }
  const closeSidebar = () => {
    setIsSideBarOpen(false)
  }
  const openModel = () => {
    setIsModelOpen(true)
  }
  const closeModel = () => {
    setIsModelOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openModel,
        closeModel,
        isSideBarOpen,
        isModelOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
