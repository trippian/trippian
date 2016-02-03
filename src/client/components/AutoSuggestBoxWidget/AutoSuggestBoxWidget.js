import React from 'react'

// this result will always tied to the destinationName at the store
class AutoSuggestBoxWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input ref="searchText" className="searchTextField form-control" font="black" type="text" size="25" placeholder="Enter a location" autoComplete="on" />
    )
  }
}


AutoSuggestBoxWidget.displayName = 'AutoSuggestBoxWidget'

export default AutoSuggestBoxWidget
