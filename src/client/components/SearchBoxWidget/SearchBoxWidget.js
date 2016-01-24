import React from 'react'

class SearchBoxWidget extends React.Component {
    constructor(props) {
      super(props)
    }

    handleClick() {
      console.log('clicked', this.refs.searchText.value)
    }

    render() {
        return (
            <form className = {`form-inline ${this.props.className}`} role = "form" >
      < div className = "form-group" >
      < label className = "sr-only" > search for destinations < /label> 
      < input type="text" ref="searchText" className="form-control" id ="" placeholder="Bali..." / >
      < /div> < button type = "submit" onClick={this.handleClick.bind(this)} className = "btn btn-primary" > Go < /button> < /form >
    )
  }
}

SearchBoxWidget.propTypes = {
  name: React.PropTypes.string
}
  
SearchBoxWidget.displayName = 'SearchBoxWidget'

export default SearchBoxWidget
