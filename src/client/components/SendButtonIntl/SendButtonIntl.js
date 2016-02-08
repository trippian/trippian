import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  defineMessages, injectIntl, intlShape, FormattedMessage
}
from 'react-intl'

const messages = defineMessages({
  label: {
    id: 'send_button.label',
    description: 'the label for send button',
    defaultMessage: 'Send'
  },
  tooltip: {
    id: 'send_button.tooltip',
    description: 'the tooltip for send button',
    defaultMessage: 'Send the message'
  }
})

class SendButton extends Component {
  render() {
    const {
      formatMessage
    } = this.props.intl

    return (
      <button 
                onClick={this.props.onClick}
                title={formatMessage(messages.tooltip)}
            >
                <FormattedMessage {...messages.label} />
            </button>
    )
  }
}

SendButton.propTypes = {
  intl: intlShape.isRequired,
  onClick: PropTypes.func.isRequired
}

export default injectIntl(SendButton)
