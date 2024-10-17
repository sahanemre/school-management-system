import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPerson = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [usertype, setUsertype] = useState('')
  const [subjecttype, setSubjecttype] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    axios
      .post('http://localhost:8081/school_db/register', {
        email: email,
        password: password,
        name: name,
        surname: surname,
        usertype: usertype,
        subjecttype: subjecttype,
      })
      .then((response) => {
        if (response.status == 200) {
          navigate('/teacher')
        } else {
          console.log('başarısız kayıt')
        }
      })
      .catch((error) => {
        // Hata durumunda hata mesajını ayarla
        console.error('Bir hata oluştu:', error)
        setError('Bir hata oluştu. Lütfen tekrar deneyin.')
        setSuccess('')
      })
  }
  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} style={{ margin: '10rem' }}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="İsim..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputSurname">Surname</label>
            <input
              type="text"
              className="form-control"
              id="inputSurname"
              placeholder="Soyisim..."
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputUsertype">Rol</label>
              <select
                type="text"
                className="form-control"
                id="inputUsertype"
                value={usertype}
                onChange={(e) => setUsertype(e.target.value)}
              >
                <option>Seçiniz...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputSubject">Branş</label>
              <select
                id="inputSubject"
                className="form-control"
                value={subjecttype}
                onChange={(e) => setSubjecttype(e.target.value)}
              >
                <option>Seçiniz...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPerson
