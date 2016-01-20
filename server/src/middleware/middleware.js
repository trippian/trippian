import { json, urlencoded } from 'body-parser';
import { join } from 'path';
import { errorHandler, errorLogger } from './utils';
import Router from '../routes/routes';
import morgan from 'morgan';
// import graphqlHTTP from 'express-graphql';
// import MyGraphQLSchema from '../graphQL/graphQLSchema';

export default function (app, express) {
  let router = express.Router();

  app.use(morgan('dev'));
  app.use(json());
  app.use(urlencoded({extended: true}));

  // app.use(express.static(join(__dirname, 'dist')));

  // graph ql route => we will use this later
  // app.use('/api', graphqlHTTP({schema: MyGraphQLSchema, graphiql: true }));
  // app.use('/', function(req, res) {
  //   res.send('Hello');
  // });

  app.use('/api', router);

  app.use('*', function(req, res) {
    res.status(404).send('404: Page not found');
  });

  Router(router);

  app.use(errorHandler);
  app.use(errorLogger);
}