import config from './config'
import chai, {
  expect
}
from 'chai'

describe('config (global)', () => {
  it('should have HOST field', () => {
    const env = process.env.Node_ENV
    const host = env !== 'production' ? 'http://localhost:3000' : 'http://www.trippian.com'
    expect(config.HOST).to.equal(host)
  })

  it('should have S3_BUCKET field', () => {
    expect(config.S3_BUCKET).to.be.a('string')
  })

  it('should have S3_ACCESS_KEY field', () => {
    expect(config.S3_ACCESS_KEY).to.be.a('string')
  })

  it('should have S3_SECRET field', () => {
    expect(config.S3_SECRET).to.be.a('string')
  })

  it('should have DBURL field', () => {
    expect(config.DBURL).to.be.a('string')
  })

  it('should have FACEBOOK_ID field', () => {
    expect(config.FACEBOOK_ID).to.be.a('string')
  })

})
