import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import 'dotenv/config'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'

const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

mongoose
  .connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Listening at port ${process.env.PORT}`)))
  .catch((error) => console.log(error))

app.use('/auth', authRoute)
app.use('/user', userRoute)