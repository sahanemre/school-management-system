const db = require('../db/db')

const executeQuery = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, results) => {
      if (err) {
        console.error('Veritabanı hatası:', err)
        return reject(err)
      }
      resolve(results)
    })
  })
}

module.exports = {
  executeQuery,
}
