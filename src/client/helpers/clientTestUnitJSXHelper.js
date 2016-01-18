import chai from 'chai'
import equalJSX from 'chai-equal-jsx'

// for more info about chai-equal-jsx, visit https://www.npmjs.com/package/chai-equal-jsx
export default () => {
  chai.use(equalJSX)
}()
