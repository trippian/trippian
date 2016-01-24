import React, {
  Component
}
from 'react'
import {
  intlShape, injectIntl, defineMessages
}
from 'react-intl'
import store from '../../redux/store'

const messages = defineMessages({
  enUSDescription: {
    id: 'menu.item_en_us_description',
    description: 'local menu English text ',
    defaultMessage: 'English'
  },
  zhDescription: {
    id: 'menu.item_zh_description',
    description: 'local menu Chinese text ',
    defaultMessage: '中文'
  },
  esDescription: {
    id: 'menu.item_es_description',
    description: 'local menu Spanish text ',
    defaultMessage: 'Espanol '
  }
})

import {
  getMessagesByLocale
}
from '../../../shared/utils/clientUtils'
store.subscribe(() => {
  console.log(store.getState().appState.get('locale'), store.getState().appState.get('messages'))
    // initializeAppStateWithLocale(store.getState().appState.get('locale'))
})


// in order to get the proper state, must dispatch locale first, then set locale messages
class LocalesMenu extends Component {
  render() {
    const {
      formatMessage
    } = this.props.intl

    return (
      <ul className={this.props.className}>
        <li>
            <a fackehref="#" onClick={()=>{
              store.dispatch({
                  type: 'appState.SET_LOCALE_MESSAGES',
                  payload: {
                   messages: getMessagesByLocale('en-US')
                  } 
              })
                 store.dispatch({
                     type: 'appState.SET_LOCALE',
                    payload: {
                      locale: 'en-US'  
                   }
              })

            }}
                title={formatMessage(messages.enUSDescription)} >
               🇺🇸
            </a>
        </li>
        <li>
            <a fackehref="#" onClick={() =>{
              store.dispatch({
                  type: 'appState.SET_LOCALE_MESSAGES',
                  payload: {
                   messages: getMessagesByLocale('zh')
                  } 
              })
              store.dispatch({
                  type: 'appState.SET_LOCALE',
                  payload: {
                   locale: 'zh'
                  } 
              })
            }}
            title={formatMessage(messages.zhDescription)} >
                🇨🇳
            </a>
        </li>
              
    </ul>
    )
  }
}

LocalesMenu.propTypes = {
  intl: intlShape.isRequired
}
LocalesMenu.displayName = 'LocalesMenu'

export default injectIntl(LocalesMenu)
