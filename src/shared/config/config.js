// import the config file based on env 
const configFile = `\./${process.env.NODE_ENV || 'development'}.json`

export default require(configFile);
