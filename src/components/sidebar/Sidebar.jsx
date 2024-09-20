import React from 'react'
import './sidebar.css'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userType')
    window.location.href = '/login'
  }

  const navigate = useNavigate()
  const handleTeacherClick = () => {
    navigate('/teacher')
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <i className="bi bi-bootstrap"></i> Sidebar
      </div>
      <a href="#dashboard">
        <i className="bi bi-speedometer2"></i> Dashboard
      </a>
      <a href="#Teacher" onClick={handleTeacherClick}>
        <i className="bi bi-table"></i> Teacher
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
