import express from 'express'
import session from 'express-session'
import cors from 'cors'
import RedisStore from 'connect-redis'
import { passport } from '../lib/passport'
import { JWT_SECRET } from './constants'
import redisClient from '../services/cache'

const sessionConfig = {
  name: 'session',
  secret: JWT_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    // uncomment below line to make cookie valid for 15 minutes
    // maxAge: 1500000,
  },
  store: new RedisStore({ client: redisClient }),
}

const setupMiddleware = app => {
  app.use(express.json())
  app.use(cors())
  app.use(session(sessionConfig))
  app.use(passport.initialize())
  app.use(passport.session())
}

export default setupMiddleware
