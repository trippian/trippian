import React, {
  Component, PropTypes
}
from 'react'
import {
  LoginButtonsWidget, LoginFormWidget
}
from '../../components/index'


export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="login">
          <h3>Login</h3>
          <LoginButtonsWidget />
          <LoginFormWidget />
          <p>New to Trippian?</p><a href="#/signup">Sign Up Now</a>
      </div>
    )
  }
}
Login.propTypes = {
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
