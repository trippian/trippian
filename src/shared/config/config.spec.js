import config from './config'
import chai, {
  expect
}
from 'chai'

describe('config (global)', () => {
  it('should have host field', () => {
    expect(config.host).to.equal('http://localhost:3000')
  })

  it('should have S3AccessKey field', () => {
    expect(config.S3AccessKey).to.be.a('string')
  })

  it('should have S3Secret field', () => {
    expect(config.S3Secret).to.be.a('string')
  })

  it('should have dbURL field', () => {
    expect(config.dbURL).to.be.a('string')
  })

})
