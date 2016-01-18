// import the config file based on env 
// all config variables are capitalized 
const configFile = `\./${process.env.NODE_ENV || 'development'}.json`

const config = require(configFile)

// environment specfic configurations (secret), some data may not be needed now. Just for future features
config.PORT = process.env.PORT || 3000
config.DEBUG = process.env.DEBUG || true
config.S3_ACCESS_KEY = process.env.S3_ACCESS_KEY || ''
config.S3_SECRET = process.env.S3_SECRET || ''
config.DBURL = process.env.DBURL || ''
config.FACEBOOK_ID = process.env.FACEBOOK_ID || ''
config.FACEBOOK_SECRET = process.env.FACEBOOK_SECRET || ''
config.GOOGLE_ID = process.env.GOOGLE_ID || ''
config.GOOGLE_SECRET = process.env.GOOGLE_SECRET || ''

export default config
