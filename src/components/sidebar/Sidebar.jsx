import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="bi bi-bootstrap"></i> Sidebar
      </div>
      <a href="#home" className="active">
        <i className="bi bi-house"></i> Home
      </a>
      <a href="#dashboard">
        <i className="bi bi-speedometer2"></i> Dashboard
      </a>
      <a href="#orders">
        <i className="bi bi-table"></i> Orders
      </a>
      <a href="#products">
        <i className="bi bi-grid"></i> Products
      </a>

      <div className="profile-section">
        <img src="https://via.placeholder.com/40" alt="profile" />
        <div className="dropdown">
          <span>mdo</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
