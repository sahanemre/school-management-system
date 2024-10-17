const express = require('express')
const dbService = require('../db/dbService')
const queries = require('../db/sql')

const router = express.Router()

router.post('/auth', async (req, res) => {
  const { email, password } = req.body
  const sql = queries.loginUser

  try {
    const results = await dbService.executeQuery(sql, [email, password])
    if (results.length > 0) {
      const user = results[0]
      console.log(user)
      res
        .status(200)
        .json({ message: 'Giriş başarılı!', usertype: user.USERTYPE })
    } else {
      res.status(401).json({ message: 'Geçersiz email veya şifre' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Veritabanı hatası', error: err })
  }
})

router.get('/teachers', async (req, res) => {
  const sql = queries.listTeacher

  try {
    const results = await dbService.executeQuery(sql)
    res.status(200).json(results) // Verileri frontend'e gönder
  } catch (err) {
    res.status(500).json({ message: 'Veritabanı hatası', error: err })
  }
})

router.post('/register', async (req, res) => {
  const { email, password, name, surname, usertype, subjecttype } = req.body
  const sql = queries.newRegister
  try {
    const results = await dbService.executeQuery(sql, [
      email,
      password,
      name,
      surname,
      usertype,
      subjecttype,
    ])
    if (results.affectedRows > 0) {
      // Yeni kayıt başarılıysa
      res.status(200).json({
        message: 'Kayıt başarılı',
        user: { email, name, surname, usertype, subjecttype },
      })
    } else {
      res.status(401).json({ message: 'Kayıt başarısız oldu' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Veritabanı hatası', error: error })
  }
})

module.exports = router
