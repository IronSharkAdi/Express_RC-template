const express = require('express')
const indexRoutes = require('./routes/index.js')
const app = express()
const port = 3000

//routes
app.use('/' , indexRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})