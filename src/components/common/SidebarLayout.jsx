import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const SidebarLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  )
}

export default SidebarLayout
