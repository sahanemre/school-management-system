const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()
app.use(cors())

app.use(express.json())

app.use('/school_db', routes)

app.listen(8081, () => {
  console.log('Listening...')
})
