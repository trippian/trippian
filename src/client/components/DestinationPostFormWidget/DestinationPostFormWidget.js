import React, {
  Component, PropTypes
}
from 'react'
import {
  reduxForm
}
from 'redux-form'
import {
  fileEnhance
}
from '../../hocs/fileEnhance'
import store from '../../redux/store'
import {
  setFiles, setDestination
}
from '../../redux/actionCreators'

class DestinationPostFormWidget extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isHOC: false,
      isFormSubmitted: store.getState().appState.get('isFormSubmitted')
    })
  }

  componentDidReceiveProps(newProps) {
    console.log('******* inside post form, recieving new props')
  }
  handleSubmit(data) {
    console.log('******submitting in the form', this.props.files, this.props.isFileUploading)
    if (this.props.isFileUploading) {
      // TODO: set alert here 
    } else {
      // set files in the store so the store action can read it before fetching 
      store.dispatch(setFiles(this.props.files))
      this.props.handleSubmit(data)

      //TODO: clear out the form and picture in callee 
    }
  }
  render() {
    const {
      fields: {
        name, description, feature, whyVisit
      },
      handleSubmit,
      submitting,
      resetForm,
      load
    } = this.props

    // the load is for fast data entry purpose, paste any data here, and click 'Load Account', the form will be automatically filled
    let data = {
      feature: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Montagem_RJ.jpg/800px-Montagem_RJ.jpg',
      name: 'Rio de Janeiro',
      whyVisit: 'Rio de Janeiro (/ˈriːoʊ di ʒəˈnɛəroʊ, -deɪ ʒə-, -də dʒə-/; Portuguese pronunciation: [ˈʁi.u dʒi ʒɐˈnejɾu];[2] River of January), or simply Rio,[3] is the second-largest city in Brazil, the sixth-largest city in the Americas, and the world\'s thirty-ninth largest city by population. The metropolis is anchor to the Rio de Janeiro metropolitan area, the second most populous metropolitan area in Brazil, the seventh-most populous in the Americas, and the twenty-third largest in the world. Rio de Janeiro is the capital of the state of Rio de Janeiro, Brazil\'s third-most populous state. Part of the city has been designated as a World Heritage Site, named "Rio de Janeiro: Carioca Landscapes between the Mountain and the Sea", by UNESCO on 1 July 2012 as a Cultural Landscape.',
      description: 'Rio de Janeiro (/ˈriːoʊ di ʒəˈnɛəroʊ, -deɪ ʒə-, -də dʒə-/; Portuguese pronunciation: [ˈʁi.u dʒi ʒɐˈnejɾu];[2] River of January), or simply Rio,[3] is the second-largest city in Brazil, the sixth-largest city in the Americas, and the world\'s thirty-ninth largest city by population. The metropolis is anchor to the Rio de Janeiro metropolitan area, the second most populous metropolitan area in Brazil, the seventh-most populous in the Americas, and the twenty-third largest in the world. Rio de Janeiro is the capital of the state of Rio de Janeiro, Brazil\'s third-most populous state. Part of the city has been designated as a World Heritage Site, named "Rio de Janeiro: Carioca Landscapes between the Mountain and the Sea", by UNESCO on 1 July 2012 as a Cultural Landscape.',
      slogan: 'A passinate city',
      averageRating: 5,
      popularTrips: []
        // album: []
    }
    let emptyData = {
      feature: 'http://lorempixel.com/200/200/people/',
      name: '',
      whyVisit: '',
      description: '',
      slogan: 'awesome city',
      averageRating: 5,
      popularTrips: [],
      album: []
    }
    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value="Beijing, China" placeholder="Paris..." {...name}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="Description" className="form-control" className="form-control" rows="2" required="required" value="a great place" {...description}></textarea>
        </div>
        <div className="form-group">
          <label>Why Visit</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" required="required" value="Beijing is the capital of the People's Republic of China and one of the most populous cities in the world." {...whyVisit}></textarea>
        </div>
        <div className="form-group">
          <label>Feature Image</label> <i className="text-muted">If this is empty, the first uploaded photo will be used as feature</i>
          <input type="url" className="form-control" value='' placeholder="http://..." {...feature}/>
        </div>
        <div className="pull-right">
          <button  disabled={this.props.isFileUploading || submitting} className={'btn ' + (this.props.isFileUploading ? 'disabled' : 'btn-success') } onClick={this.handleSubmit.bind(this)}>Submit</button> 
          <button type="button" className="btn btn-default" disabled={submitting} onClick={()=> load(emptyData)} > Clear Values</button>
          <button type="button" className="btn btn-default" onClick={() => load(data)}>Load Dummy Data</button>
        </div>
      </form>
    )
  }
}


DestinationPostFormWidget = reduxForm({
    form: 'destinationPostForm', // a unique name for this form
    fields: ['name', 'description', 'feature', 'whyVisit'] // all the fields in the form
  },
  state => ({ // mapStateToProps
    initialValues: state.apiTrippian.get('destination') // will pull state into form's initialValues
  }), {
    load: setDestination
  } // mapDispatchToProps (will bind action creator to dispatch)
)(DestinationPostFormWidget)


DestinationPostFormWidget.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
    // submitting: PropTypes.bool.isRequired
}

DestinationPostFormWidget.displayName = 'DestinationPostFormWidget'

export default fileEnhance(DestinationPostFormWidget)
