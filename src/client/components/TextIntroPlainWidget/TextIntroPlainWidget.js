import React from 'react'

const TextIntroPlainWidget = ({
  name = 'TextIntroPlainWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
TextIntroPlainWidget.displayName = 'TextIntroPlainWidget'

export default TextIntroPlainWidget
