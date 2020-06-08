const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db');
dotenv.config({path:'./config/config.env'})


connectDB()
const transactions = require('./routes/transaction')
const app = express()

app.use('/api/v1/transactions',transactions)

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server  in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))