import React from 'react'

const TeacherList = ({ teacherList }) => {
  return (
    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {teacherList.map((row) => (
            <tr key={row.ID}>
              <th scope="row">{row.ID}</th>
              <td>{row.NAME}</td>
              <td>{row.SUBJECTNAME}</td>
              <td>{row.EMAIL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeacherList
