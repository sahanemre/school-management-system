const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')

const app = express()
app.use(cors())

app.use(express.json())

app.use('/school_db', authRoutes)

app.listen(8081, () => {
  console.log('Listening...')
})
