import React, {
  Component, PropTypes
}
from 'react'
import {
  reduxForm
}
from 'redux-form'
  // import {show as showResults} from '../redux/modules/submission'


const submit = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
          reject({
            username: 'User does not exist',
            _error: 'Login failed!'
          })
        } else if (values.password !== 'redux-form') {
          reject({
            password: 'Wrong password',
            _error: 'Login failed!'
          })
        } else {
          // dispatch(showResults(values))
          resolve()
        }
      }, 1000) // simulate server latency
  })
  
}

class LoginFormWidget extends Component {
  static propTypes = {
    error: PropTypes.string,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

  render() {
    const {
      fields: {
        username, password
      },
      error,
      resetForm,
      handleSubmit,
      submitting
    } = this.props

    return (
      <form onSubmit={handleSubmit(submit)}>
            <div>
              <label>Username</label>
              <div>
                <input type="text" placeholder="Username" {...username}/>
              </div>
              {username.touched && username.error && <div>{username.error}</div>}
            </div>
            <div>
              <label>Password</label>
              <div>
                <input type="password" placeholder="Password" {...password}/>
              </div>
              {password.touched && password.error && <div>{password.error}</div>}
            </div>
            {error && <div>{error}</div>}
            <div>
              <button disabled={submitting} onClick={handleSubmit(submit)}>
                {submitting ? <i/> : <i/>} Log In
              </button>
              <button disabled={submitting} onClick={handleSubmit}>
               Plain Submit
              </button>
              <button disabled={submitting} onClick={resetForm}>
                Clear Values
              </button>
            </div>
          </form>
    )
  }
}

LoginFormWidget = reduxForm({
  form: 'loginForm',
  fields: ['username', 'password']
})(LoginFormWidget)

LoginFormWidget.displayName = 'LoginFormWidget'

export default LoginFormWidget
