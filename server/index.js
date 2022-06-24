import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

mongoose
  .connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Listening at port ${process.env.PORT}`)))
  .catch((error) => console.log(error))
