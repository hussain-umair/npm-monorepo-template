import express from 'express'
import setupRoutes from './routes'
import setupMiddleware from './middleware'


export const app = express()

export const setupApp = async () => {
  setupMiddleware(app)
  await setupRoutes(app)
  return app
}

export default app
