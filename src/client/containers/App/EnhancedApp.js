import {
  Component
}
from 'React'
import store from '../../redux/store'

// a demo higher order component 
export const Enhance = ComposedComponent => class extends Component {
  constructor() {
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.setState({
      data: 'Hello'
    })
  }
  render() {
    return (
      <Provider store={store}>
        <ComposedComponent {...this.props} data={this.state.data} />
      </Provider>
    )
  }
}
