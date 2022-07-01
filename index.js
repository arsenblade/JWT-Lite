require('dotenv').config()
const express = require('express');
const authRouter = require('./authRoutes')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000
const app = express();
app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(PORT, () => console.log(PORT))
  } catch (e) {
    console.log(e)
  }
}

start()