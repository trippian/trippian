###Trippian 
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](https://travis-ci.org/vidaaudrey/trippian)
[![codecov coverage](https://img.shields.io/codecov/c/github/vidaaudrey/trippian/develop.svg?style=flat-square)](https://codecov.io/github/vidaaudrey/trippian?branch=develop)
[![npm version](https://badge.fury.io/js/trippian.svg)](https://badge.fury.io/js/trippian)
[![Downloads](http://img.shields.io/npm/dm/trippian.svg?style=flat-square)](https://npmjs.org/package/trippian)
[![Issue Stats](http://issuestats.com/github/trippian/trippian/badge/pr)](http://issuestats.com/github/trippian/trippian)
[![Issue Stats](http://issuestats.com/github/trippian/trippian/badge/issue)](http://issuestats.com/github/trippian/trippian)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

Your local trip companion 

###Setup
`npm install`

Config the node environment (not complete yet):
- S3AccessKey
- S3Secret
- FACEBOOK_ID
- FACEBOOK_SECRET
....

###Test 
`npm run test`
This will watch *.spec.js and run the test (update this part later)


### UI Design 
All design files are under `_planning/static/` directory

When designing, run `gulp` and change the files under `_planning/static/src/` folder, the browser will auto-reload the files whenever any file changes.

When you finsihed the design, run `gulp copy`, and all your files except html under `_planning/static/build/` will be copied to `dist/` directory. 


###Develop 
- `npm run dev` will start the dev server and run/watch all test files ending with '*.spec.js'. In general this is enough. 
- Write the tests first, and add related features
- Once you finished writing the feature and ready to commit, check if the tests still pass
- Add staged files 
- Run `npm run commit` and follow the commitizen flow to add related messages following [Angular Commiting Guideline](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit)

- To prevent conflict at a particular file, e.g. package.json, do the following before commit: 
```
git add -u
git reset -- package.json 
```
If you already pushed, try to run reset:
```
git reset HEAD~1   
git add -u
git reset -- package.json # or any other fiels 
npm run commit 
git push origin develop -f # force push to your remote branch 
```

We used the dotenv npm package to configure our development variables. To run locally, you must store a few variables in a .env file.
- HOST
- FACEBOOK_APP_ID
- FACEBOOK_APP_SECRET
- FACEBOOK_CALLBACK_URL
- GRAPHSTORY_URL
- S3_BUCKET
- AWS_ACCESS_KEY_ID
- AWS_SECRET_KEY

### Serve API:
```
babel-node server/src/server.js --presets es2015
```
visit: [http://localhost:4000/api/destination/123](http://localhost:4000/api/destination/123)
or [http://localhost:4000/api/trippian/123](http://localhost:4000/api/trippian/123)

### Deploy 
Run `npm run build`, will build the bundle.js file in dist folder and copy all asset files from dist to deploy folder. 


### Tranlsate 
Copy the content from .babelrc1 to .babelrc, and run:
`
babel-node --plugins react-intl --presets es2015,stage-1,react src/client/entry.js
`
Replace entry.js with any file you wish to translate. 
Remember to change the .babelrc back for webpack to work properly. (We don't have a solution to make babel work with both webpack and react-intl yet)
