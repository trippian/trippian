import log from '../../log'
import React from 'react'
import Geosuggest from 'react-geosuggest'
import {
  setSearchText
}
from '../../redux/actionCreators'
import store from '../../redux/store'
import {
  AutoSuggestBoxWidget as appConfig
}
from '../../config/appConfig'
import {
  FormattedNumber, FormattedPlural, FormattedMessage, defineMessages, intlShape, injectIntl
}
from 'react-intl'

const messages = defineMessages({
  placeholder: {
    id: 'AutoSuggestBoxWidget.placeholder',
    description: 'text for the search input placeholder',
    // defaultMessage: appConfig.placeholder
    defaultMessage: 'search place'
  }
})

// this result will always tied to the destinationName at the store
class AutoSuggestBoxWidget extends React.Component {
  constructor(props) {
    super(props)
  }
  onFocus() {
    // log.info('onFocus')
  }
  onBlur() {
    // log.info('onBlur')
  }

  onChange(value) {
    // log.info('input changes to :' + value);
  }

  onSuggestSelect(suggest) {
    log.info(suggest)
    store.dispatch(setSearchText(suggest))
  }
  render() {
    const {
      formatMessage
    } = this.props.intl
    return (
      <Geosuggest
        fixtures={appConfig.fixtures}
        placeholder={formatMessage(messages.placeholder)}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius="20" />
    )
  }
}


AutoSuggestBoxWidget.displayName = 'AutoSuggestBoxWidget'
export default injectIntl(AutoSuggestBoxWidget)
