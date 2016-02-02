import React from 'react'

class AutoSuggestBoxWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input id="searchTextField" ref="searchText" className="form-control" font="black" type="text" size="25" placeholder="Enter a location" autocomplete="on" />
      </div>
    )
  }
}


AutoSuggestBoxWidget.displayName = 'AutoSuggestBoxWidget'

export default AutoSuggestBoxWidget