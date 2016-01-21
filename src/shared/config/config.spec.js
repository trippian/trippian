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

  it('should have PORT field', () => {
    expect(config.PORT).to.be.a('number')
  })

  it('should have AWS_ACCESS_KEY_ID field', () => {
    expect(config.AWS_ACCESS_KEY_ID).to.be.a('string')
  })

  it('should have AWS_SECRET_KEY field', () => {
    expect(config.AWS_SECRET_KEY).to.be.a('string')
  })

  it('should have S3_BUCKET field', () => {
    expect(config.S3_BUCKET).to.be.a('string')
  })

  it('should have DATABASE_URI field', () => {
    expect(config.DATABASE_URI).to.be.a('string')
  })

  it('should have GOOGLE_APP_ID field', () => {
    expect(config.GOOGLE_APP_ID).to.be.a('string')
  })

  it('should have FACEBOOK_APP_ID field', () => {
    expect(config.FACEBOOK_APP_ID).to.be.a('string')
  })

  it('should have FACEBOOK_APP_SECRET field', () => {
    expect(config.FACEBOOK_APP_SECRET).to.be.a('string')
  })

  it('should have FACEBOOK_CALLBACK_URL filed', () => {
    expect(config.FACEBOOK_CALLBACK_URL).to.be.a('string')
  })

})
