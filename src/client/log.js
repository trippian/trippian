// keep this file the same level as entry.js so it's easy to be consistent with import path
import bunyan from 'bunyan'
import {
  log as appConfig
}
from '../client/config/appConfig'

export default bunyan.createLogger({
  name: 'trippian',
  level: appConfig.logLevel // disable this for translation 
    // level: 'error' // enable this for development
})

//example usage 
// log.info('hi')
// log.warn({
//     lang: 'fr',
//   },
//   'au revvoir'
// )
