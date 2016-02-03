import facebook from 'passport-facebook'
import google from 'passport-google-oauth'
import local from 'passport-local'
import User from './db/models/user'
import bcrypt from 'bcrypt'
// import passport from 'passport'
const FacebookStrategy = facebook.Strategy
const GoogleStrategy = google.OAuth2Strategy
const LocalStrategy = local.Strategy
require('dotenv').config()

export default function (app, passport) {
  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser((obj, done) => {
    // after we write user model, we will search for that user node
    done(null, obj)
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true
  }, 
    (req, email, password, done) => {
      process.nextTick(() => {
        User.getUserByParameter('email', `"${email}"`)
          .then(user => {
            if (user.length) {
              return done(null, false, req.flash('signupMessage', 'That email is already taken'))
            } else {
              bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(password, salt, (error, hash) => {
                  if (error) {
                    return done(error)
                  } else {
                    User.createUser({
                      email: email,
                      password: hash
                    })
                    .then(newUser => {
                      // req.session.id = newUser.id
                      // req.session.email = newUser.email
                      console.log(req.session)
                      return done(null, newUser)
                    })
                  }
                })                
              })
            }
          })
      })
    }
  ))
  
  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true 
  }, 
    (req, email, password, done) => {
      process.nextTick(() => {
        User.getUserByParameter('email', `"${email}"`)
          .then(user => {
            if (!user.length) {
              return done(null, false, req.flash('loginMessage', 'No User found'))
            } else {
              bcrypt.compare(password, user[0].password, (error, isMatch) => {
                if (isMatch) {
                  return done(null, user[0])
                } else {
                  return done(null, false, req.flash('loginMessage', 'Wrong Password'))
                }
              })
            }
          })
      })
    }
  ))
  
  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'email', 'photos', 'timezone', 'gender']
  },
    (token, refreshToken, profile, done) => {
      process.nextTick(() => {
        // find user node in database based on their facebookID
        // User.getUserByParameter('facebookId', profile.id)
        //   .then(function(user) {
        //     if(user.length) {
        //       console.log('user already exists as ', user[0])
        //       return done(null, user[0])
        //     } else {
        //       User.createUser({
        //         name: profile.displayName,
        //         facebookToken: token,
        //         facebookId: parseInt(profile.id),
        //         email: profile.emails[0].value,
        //         picture: `https://graph.facebook.com/${profile.id}/picture?height=500`
        //       }, 'User')
        //       .then(function(newUser) {
        //         console.log('newUser has been created', newUser)
        //         return done(null, newUser)
        //       })
        //     }
        //   })

        done(null, profile)
      })
    }
  ))

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_APP_ID,
    clientSecret: process.env.GOOGLE_APP_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, 
    (token, refreshToken, profile, done) => {
      process.nextTick(() => {
        // let idString = `"${profile.id}"`
        // User.getUserByParameter('googleId', idString)
        //   .then(user => {
        //     if (user.length) {
        //       console.log('user exists as: ', user[0])
        //       return done(null, user[0])
        //     } else {
        //       User.createUser({
        //         googleId: idString,
        //         googleToken: token,
        //         name: profile.displayName,
        //         email: profile.emails[0].value
        //       })
        //       .then(createdUser => {
        //         console.log('a new user has been created: ', createdUser)
        //         return done(null, createdUser)
        //       })
        //     }
        //   })
        done(null, profile)
      })
    }
  ))

  app.use(passport.initialize())
  app.use(passport.session())
}
