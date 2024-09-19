import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userType')
    window.location.href = '/login'
  }
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

      <div className="logout-profile">
        <button
          type="button"
          className="btn btn-danger btn-block"
          style={{ padding: '1rem' }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
