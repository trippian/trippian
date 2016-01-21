import { json } from 'body-parser'
import { join } from 'path'
import { errorHandler, errorLogger } from './utils'
import Router from '../routes/routes'
import AuthRouter from '../routes/authRoutes'
import morgan from 'morgan'
import passport from 'passport'
import PassportConnection from '../passport'
import session from 'express-session'
import cors from 'cors'
// import graphqlHTTP from 'express-graphql';
// import MyGraphQLSchema from '../graphQL/graphQLSchema';

export default function (app, express) {
  let router = express.Router()
  let authRouter = express.Router()

  PassportConnection(passport)
  app.use(morgan('dev'))
  app.use(json())
  app.use(cors())

  app.use(express.static(join(__dirname, '../../../deploy')))

  // graph ql route => we will use this later
  // app.use('/api', graphqlHTTP({schema: MyGraphQLSchema, graphiql: true }));

  app.use(session({secret: 'no time to eat'}))
  app.use(passport.initialize())
  app.use(passport.session())
  // not sure if i need this yet
  // app.use(flash())

  app.use('/', router)
  app.use('/auth', authRouter)

  app.use('*', function(req, res) {
    res.status(404).send('404: Page not found')
  })

  Router(router)
  AuthRouter(authRouter, passport)

  app.use(errorHandler)
  app.use(errorLogger)
}