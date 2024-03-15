import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { AppDataSource } from './database/data-source'
import { routes } from './routes'

dotenv.config()

const server = express()

server.use(cors())

server.use(express.json())

server.use(routes)

AppDataSource.initialize().then(async () => {
  console.log('Connected with MySQL!')
  server.listen(process.env.PORT, () => {
    console.log('Server started at ' + process.env.PORT)
  })
})
