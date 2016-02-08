import HelloWorldWidget from './HelloWorldWidget'
import {
  expect, React, TestUtils, JSXHelper
}
from '../../helpers/clientTestHelpers'

// import log from '../../log'
import React from 'react'
  // import TestUtils from 'react-addons-test-utils'
  // import chai, {
  //   expect
  // }
  // from 'chai'

// for more info about chai-equal-jsx, visit https://www.npmjs.com/package/chai-equal-jsx
// import equalJSX from 'chai-equal-jsx';
// chai.use(equalJSX)

describe('HelloWorldWidget', () => {
  it('should render HelloWorldWidget', () => {
    const render = TestUtils.createRenderer()
    render.render(<HelloWorldWidget name="Joe"/>)
    const actual = render.getRenderOutput()
    const expected = (<div>Hello, Joe</div>)
      // log.info('expected', expected);
    expect(actual).to.equalJSX(expected)
  })
})
