const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const utils = require('./utils');
const router = require('../routes/routes');

module.exports = function (app, express) {
  // let router = express.Router();

  app.use(morgan('dev'));
  // app.use(bodyParser.urlencoded({err(xtended: true}));
  app.use(bodyParser.json());
  // app.use(express.static(path.join(__dirname, 'dist')));

  // app.use('/', router);

  app.use('/', function(req, res) {
    res.send('Hello from expressjs');
  });

   app.use('*', function(req, res) {
    res.status(404).send('404: Page not found');
  });

  // require('../routes/routes.js')(router);  

  app.use(utils.errorHandler);
  app.use(utils.errorLogger);
}