import { json, urlencoded } from 'body-parser'
import { join } from 'path'
import { errorHandler, errorLogger } from './utils'
import Router from '../routes/routes'
import AuthRouter from '../routes/authRoutes'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import flash from 'connect-flash'
import passport from 'passport'
import PassportConnection from '../passport'
import session from 'express-session'
import cors from 'cors'
import express from 'express'

export default function (app) {
  let router = express.Router()
  let authRouter = express.Router()

  // logs requests during development
  app.use(morgan('dev'))
  app.use(cookieParser())
  app.use(json())
  app.use(urlencoded({extended:true}))
  app.use(cors())

  app.use(session({
    name: 'trippian',
    secret: 'no time to eat',
    resave: true,
    saveUninitialized: true
  }))

  PassportConnection(app, passport)
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())

  app.use(express.static(join(__dirname, '../../../deploy')))

  app.use('/', router)
  app.use('/auth', authRouter)

  Router(router)
  AuthRouter(authRouter)

  app.use('*', function(req, res) {
    res.status(404)
    // respond with html page
    res.sendFile(join(__dirname, '../assets/404.html'))
  })
  
  app.use(errorHandler)
  app.use(errorLogger)
}