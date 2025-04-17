const express = require('express')
const morgan = require('morgan') 
const app = express()

app.use(morgan('dev'))

app.get('/',(req,res) => {
  res.send("This route is using middleware")
})

app.listen(3000)