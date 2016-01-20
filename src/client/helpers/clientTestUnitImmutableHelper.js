import chai from 'chai'
import chaiImmutable from 'chai-immutable'


// for more info about chai-equal-jsx, visit https://www.npmjs.com/package/chai-equal-jsx
export default () => {
  chai.use(chaiImmutable)
}()
