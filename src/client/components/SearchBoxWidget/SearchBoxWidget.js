import React from 'react'

const SearchBoxWidget = ({
  name = 'SearchBoxWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
SearchBoxWidget.displayName = 'SearchBoxWidget'

export default SearchBoxWidget
