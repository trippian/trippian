import bodyParser from 'body-parser';
import path from 'path';
import utils from './utils';
import graphqlHTTP from 'express-graphql';
import MyGraphQLSchema from '../graphQL/graphQLSchema';

module.exports = function (app, express) {

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  // app.use(express.static(path.join(__dirname, 'dist')));

  app.use('/api', graphqlHTTP({schema: MyGraphQLSchema, graphiql: true }));

   app.use('*', function(req, res) {
    res.status(404).send('404: Page not found');
  });

  app.use(utils.errorHandler);
  app.use(utils.errorLogger);
}