const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'school_db',
})

db.connect((err) => {
  if (err) {
    console.error('Veritabanına bağlanılamadı')
    return
  }
  console.log('Veritabanına bağlanıldı')
})

module.exports = db
