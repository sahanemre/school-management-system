const express = require('express')
const db = require('../db/db')
const queris = require('../db/sql')

const router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body
  const sql = queris.loginUser

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err)
      return res.status(500).json({ message: 'Veritabanı hatası' })
    }

    if (results.length > 0) {
      const user = results[0]
      console.log(user)
      res
        .status(200)
        .json({ message: 'Giriş başarılı!', usertype: user.USERTYPE })
    } else {
      res.status(401).json({ message: 'Geçersiz email veya şifre' })
    }
  })
})

module.exports = router
