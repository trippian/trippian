import {
  TestUtils, React, Chai, expect, DomTestHelper
}

from '../../helpers/clientTestHelpers'

import IconWidget from './IconWidget'


describe('IconWidget', () => {
  it('should render the IconWidget', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<IconWidget name='facebook' />)
    const actual = renderer.getRenderOutput().props.className.includes('facebook')
    const expected = true
    expect(actual).to.equal(expected)
  })
})
