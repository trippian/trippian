import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  JumbotronShortWidget
}
from '../../components/index'
import {
  LoginWrapper
  as appConfig
}
from '../../config/appConfig'
export default class LoginWrapper extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="destination-post-page">
        <JumbotronShortWidget title={appConfig.title} subTitle={appConfig.subTitle} />
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
              {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
LoginWrapper.propTypes = {
  name: PropTypes.string
}

// render() {
//   return (
//     <div id="destination-post-page">
//       <JumbotronWidget title="Login" subTitle="Lorem ipsum dolor sit."/>
//       <div className="container main-content-container">
//         <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
//           <h3>Login</h3>
//           <LoginButtonsWidget />
//           <LoginFormWidget error={this.state.error} fields={this.state.fields} onSubmit={this.handleSumbit} resetForm={this.handleReset} submitting={this.state.submitting} />
//         </div>
//       </div>
//     </div>
//   )
// }
