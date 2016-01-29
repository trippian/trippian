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
// import graphqlHTTP from 'express-graphql';
// import MyGraphQLSchema from '../graphQL/graphQLSchema';

export default function (app) {
  let router = express.Router()
  let authRouter = express.Router()

  app.use(morgan('dev'))
  app.use(cookieParser())
  app.use(json())
  app.use(urlencoded({extended:true}))
  app.use(cors())

  // graph ql route => we will use this later
  // app.use('/api', graphqlHTTP({schema: MyGraphQLSchema, graphiql: true }));

  app.use(session({
    name: 'trippian',
    secret: 'no time to eat',
    resave: true,
    saveUninitialized: true
  }))

  PassportConnection(app, passport)
  app.use(passport.initialize())
  app.use(passport.session())
  // not sure if i need this yet
  app.use(flash())

  app.use(express.static(join(__dirname, '../../../deploy')))

  app.use('/', router)
  app.use('/auth', authRouter)

  Router(router)
  AuthRouter(authRouter)

  app.use('*', function(req, res) {
    res.status(404).send('404: Page not found')
  })
  
  app.use(errorHandler)
  app.use(errorLogger)
}