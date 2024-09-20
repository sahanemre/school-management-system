import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import TeacherList from '../components/teacher/TeacherList'
import axios from 'axios'
import TeacherFilter from '../components/teacher/TeacherFilter'

const TeacherPage = () => {
  const [teacherList, setTeacherList] = useState([])
  const [searchItem, setSearchItem] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:8081/school_db/teachers')
      .then((response) => {
        console.log(response.data)
        const data = response.data
        setTeacherList(data)
      })
      .catch((error) => {
        console.error('Veri alma hatası:', error)
      })
  }, [])

  const filteredList = teacherList.filter((teacher) =>
    teacher.NAME.toLowerCase().includes(searchItem.toLocaleLowerCase())
  )

  return (
    <div>
      <Sidebar />
      <div
        className="teacher-content"
        style={{ marginLeft: '250px', border: '2px solid red' }}
      >
        <div className="teacher-page">
          <div className="teacher-container">
            <section
              className="right-up-section"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '5rem',
              }}
            >
              <h2 style={{ marginLeft: '5rem' }}>Teachers</h2>
              <div
                className="btn-group"
                role="group"
                style={{ display: 'flex', marginRight: '5rem' }}
              >
                <button type="button" className="btn btn-light">
                  Export CSV
                </button>
                <button type="button" className="btn btn-primary">
                  Add Teachers
                </button>
              </div>
            </section>
            <section
              className=".bg-light border border-primary"
              style={{
                marginTop: '5rem',
                marginLeft: '5rem',
                marginRight: '5rem',
                background: '#E5D9F2',
              }}
            >
              <TeacherFilter
                searchItem={searchItem}
                setSearchItem={setSearchItem}
              />
            </section>
            <section
              style={{
                marginLeft: '5rem',
                marginRight: '5rem',
                marginTop: '2rem',
                border: '2px solid red',
                height: '60vh',
                background: '#F5EFFF',
              }}
            >
              <TeacherList teacherList={filteredList} />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherPage
