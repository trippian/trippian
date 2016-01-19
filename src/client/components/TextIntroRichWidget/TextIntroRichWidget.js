import React from 'react'

const TextIntroRichWidget = ({
  name = 'TextIntroRichWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
TextIntroRichWidget.displayName = 'TextIntroRichWidget'

export default TextIntroRichWidget
