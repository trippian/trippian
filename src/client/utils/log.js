import bunyan from 'bunyan'
import {
  log as appConfig
}
from '../config/appConfig'

export default bunyan.createLogger({
  name: 'trippian',
  level: appConfig.logLevel || 'info'
})

//example usage 
// log.info('hi')
// log.warn({
//     lang: 'fr',
//   },
//   'au revvoir'
// )
