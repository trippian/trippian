import log from '../../log'
import React from 'react'

const TextIntroRichWidget = ({
  content = 'Rich Content here ', expandable = false
}) => {
  return (
    <div> 
        {content}
    </div>
  )
}
TextIntroRichWidget.displayName = 'TextIntroRichWidget'

export default TextIntroRichWidget
