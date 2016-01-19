// import the config file based on env 
// all config variables are capitalized 
const configFile = `\./${process.env.NODE_ENV || 'development'}.json`

const config = require(configFile)

// environment specfic configurations (secret), some data may not be needed now. Just for future features
config.PORT = process.env.PORT || 3000
config.DEBUG = process.env.DEBUG || true
config.S3_BUCKET = process.env.S3_BUCKET || ''
config.AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || ''
config.AWS_SECRET_KEY = process.env.AWS_SECRET_KEY|| ''
config.DATATBASE_URI = process.env.GRAPHSTORY_URL || ''
config.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || ''
config.FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET || ''
config.GOOGLE_APP_ID = process.env.GOOGLE_APP_ID || ''
config.GOOGLE_APP_SECRET = process.env.GOOGLE_APP_SECRET || ''

export default config
