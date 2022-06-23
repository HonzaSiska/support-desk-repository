const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000 
const app = express()
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
// const { connect } = require('mongoose')
const connectDB = require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//CONNECT TO THE DB
connectDB()


app.get('/', ( req, res ) => {
    res.status(200).json({"message" : "hello from server"})
})

app.use('/api/users', require('./routes/userRoutes'))

// middleware
app.use(errorHandler)  


app.listen(PORT, ()=> console.log(`Server  is running on port ${PORT}`)
)