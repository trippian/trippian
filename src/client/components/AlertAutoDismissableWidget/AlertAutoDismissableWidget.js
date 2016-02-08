//currently not in use
import log from '../../log'
import React, {
  Component
}
from 'react'
import {
  Button, Alert
}
from 'react-bootstrap'
class AlertAutoDismissableWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertVisible: false
    }
  }

  render() {

    if (this.state.alertVisible) {
      return <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)} dismissAfter={2000}>
                <h4>Oh snap! You got an error!</h4>
                <p>But this will hide after 2 seconds.</p>
              </Alert>
    } else {
      return <Button onClick={this.handleAlertShow.bind(this)}>Show Alert</Button>
    }
  }


  handleAlertDismiss() {
    this.setState({
      alertVisible: false
    })
  }

  handleAlertShow() {
    this.setState({
      alertVisible: true
    })
  }
}


AlertAutoDismissableWidget.displayName = 'AlertAutoDismissableWidget'

export default AlertAutoDismissableWidget
