<img src="https://s3-us-west-1.amazonaws.com/trippian/logo-white.png" width=250>


[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](https://travis-ci.org/vidaaudrey/trippian)
[![codecov coverage](https://img.shields.io/codecov/c/github/vidaaudrey/trippian/develop.svg?style=flat-square)](https://codecov.io/github/vidaaudrey/trippian?branch=develop)
[![npm version](https://badge.fury.io/js/trippian.svg)](https://badge.fury.io/js/trippian)
[![Downloads](http://img.shields.io/npm/dm/trippian.svg?style=flat-square)](https://npmjs.org/package/trippian)
[![Issue Stats](http://issuestats.com/github/trippian/trippian/badge/pr)](http://issuestats.com/github/trippian/trippian)
[![Issue Stats](http://issuestats.com/github/trippian/trippian/badge/issue)](http://issuestats.com/github/trippian/trippian)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

Your local trip companion! Trippian is a web application that allows tourists (Trippees) to connect with a Trippian, a local who wants to show people around and show them what it would be like to live in a different city/country.

###Architecture
<img src="https://s3-us-west-1.amazonaws.com/trippian/trippian-architecture.png" width="800">

####Database Design
<img src="https://s3-us-west-1.amazonaws.com/trippian/Trippian+Database+Schema.png" width="500">

In a typical graph database, there are two different data types: nodes and relationships between those nodes. An unlimited amount of properties can be stored in both of these data constructs. In Neo4j, there are nodes with different labels, which are similar to subclasses and can be filtered by the label. We have 3 different labels for these nodes: User, Trip, and Destination. In addition to these labels, we have two different kinds of users, a Trippian and a Trippee. We differentiate between these two user by storing a property called isTrippian as a boolean value. We also have 8 different types of relationships between nodes that are represented in the diagram above. The arrows represent the direction of the relationship from one node to another. 

### Technology Stack
- React/Redux
- Node/Express
- Neo4j
- Babel/ES6
- Travis CI
- Mocha
- Chai
- AWS S3
- webpack
- Sass
- Gulp

###Setup
For this project, we develop using webpack to bundle our react code and gulp to watch and compile all our styling files. Thus, during development, we have the server running on localhost port 4000 and our webpack server on localhost port 3000.

- `npm install` to install our dependencies
- `npm run dev` will start the dev server and run/watch all test files ending with '*.spec.js'.
- `npm run start:server` will start our main server on localhost:4000
- `npm run build`, will build the bundle.js file in the dist folder and copy all asset files from dist to deploy folder. 
- NOTE: our main server will serve up the deploy folder, so if you would like to see updates on localhost:4000, you must run `npm run build`
- `npm run commit` follows commitizen guidelines and will help you figure out which commit message to use.

We used the dotenv npm package to configure our development variables. To run locally, you must create a .env file in the root directory and add in these variables. Here is a template file: [dotenvTemplate](https://github.com/trippian/trippian/blob/master/dotenvTemplate)

- HOST, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FACEBOOK_CALLBACK_URL, GRAPHSTORY_URL, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_KEY, GOOGLE_APP_ID, GOOGLE_APP_SECRET, GMAIL_ACCOUNT, GMAIL_PWD, GOOGLE_MAPS_API_KEY

###Testing
For Client-side testing, we used mocha and chai and for server-side testing, we user mocha and chai with supertest. Supertest is a great library for testing routes on your server. It creates an instance of your server that you can test. For more information click this [link](https://github.com/visionmedia/supertest)

`npm run test`
`npm run test:server`
This will watch *.spec.js and run the test (update this part later)

### Styling
All our styling files, including static assets and scss files are inside the `_planning/static/` directory

When making changes to the styling, run `gulp`. This will watch any changes in the `_planning/static/src/` folder and auto-reload the files after any changes.

When you are done making changes to the styling, run `gulp copy` and then all the files in `_planning/static/build/` except any html files will be copies to the `dist` folder.

###Contributing
Check out our [contributing guide](https://github.com/trippian/trippian/blob/master/CONTRIBUTING.md) to see how to get started in contributing to our project!

###API Documentation
For any information on any of the REST endpoints, check out our API specifications doc [here](https://github.com/trippian/trippian/wiki/APISpec)

###Team
We are a team of 4 full-stack software engineers that are passionate about all facets of software development. If you have any questions or comments feel free to email us by clicking the mail icons next to our names or checkout our github profiles!

- Audrey Li [<img src="http://cdn.flaticon.com/png/256/25231.png" width=20>](https://github.com/vidaaudrey) [<img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519948-008_Mail-128.png" width=20>](mailto:me@audreyli.me?Subject=trippian)
- Joe Lagasse [<img src="http://cdn.flaticon.com/png/256/25231.png" width=20>](https://github.com/jlag34) [<img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519948-008_Mail-128.png" width=20>](mailto:jlag2351@gmail.com?Subject=trippian)
- Yale Yuen [<img src="http://cdn.flaticon.com/png/256/25231.png" width=20>](https://github.com/ycube) [<img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519948-008_Mail-128.png" width=20>](mailto:yaleyyuen@gmail.com?Subject=trippian)
- Elliot Chi [<img src="http://cdn.flaticon.com/png/256/25231.png" width=20>](https://github.com/elliotschi) [<img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519948-008_Mail-128.png" width=20>](mailto:elliotschi@gmail.com?Subject=trippian)
