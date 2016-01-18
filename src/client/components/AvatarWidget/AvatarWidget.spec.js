import {
  expect, React, TestUtils, JSXHelper
}
from '../../helpers/clientTestHelpers'

import AvatarWidget from './AvatarWidget'


describe('AvatarWidget', () => {
  it('should render AvatarWidget', () => {
    const render = TestUtils.createRenderer()
    render.render(<AvatarWidget/>)
    const actual = render.getRenderOutput()
    const expected = (<div> 
            <h3>Widget</h3>
            AvatarWidget
        </div>)
    expect(actual).to.equalJSX(expected)
  })
})
