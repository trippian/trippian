import React from 'react'
import CircleImageLinkWidget from './CircleImageLinkWidget'
import apiMisc from '../helpers/apiMisc'
import config from '../config/config'
import store from '../store/store'

export default class FacebookAvatarWidget extends React.Component {
  static propTypes = {
    id: React.PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      id: '893335047440430',
      src: config.FB_DEFAULT_AVARTAR_URL,
      link: 'https://facebook.com/893335047440430'
    }
    store.subscribe(() =>
      console.log('store updated', store.getState().get('userId'))
    )


    this.init(this.props)
  }

  init(props) {
    apiMisc.getFBAvatar(props.id)
      .then(data => {
        if (!data.is_silhouette) {
          this.setState({
            src: data.url
          })
          store.dispatch({
            type: 'LOGIN',
            userId: this.state.id
          })
        }
      })
  }

  render() {
    return (
      <div>
        <CircleImageLinkWidget link={this.state.link} src={this.state.src} alt="facebook avatar" />
      </div>
    )
  }
}
