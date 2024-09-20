const express = require('express')
const db = require('../db/db')
const queris = require('../db/sql')

const router = express.Router()

router.get('/', (req, res) => {
  const sql = queris.listTeacher

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err)
      return res.status(500).json({ message: 'Veritabanı hatası' })
    }
    res.status(200).json(results) // Gelen verileri frontend'e gönder
  })
})

module.exports = router
