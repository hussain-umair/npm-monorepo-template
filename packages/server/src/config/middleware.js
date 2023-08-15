import express from 'express'
import cors from 'cors'

const setupMiddleware = app => {
  app.use(express.json())
  app.use(cors())
}

export default setupMiddleware
