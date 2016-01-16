import React from 'react'
import HelloWorld from './HelloWorld'
import TestUtils from 'react-addons-test-utils'
import chai, {
  expect
}
from 'chai'

// for more info about chai-equal-jsx, visit https://www.npmjs.com/package/chai-equal-jsx
import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX)

describe('HelloWorld', () => {
  it('should render hello world', () => {
    const render = TestUtils.createRenderer()
    render.render(<HelloWorld name="Joe"/>)
    const actual = render.getRenderOutput()
    const expected = (<div>Hello, Joe</div>)
      // console.log('expected', expected);
    expect(actual).to.equalJSX(expected)
  })
})
