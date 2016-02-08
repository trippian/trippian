import log from '../../log'
import React from 'react'

// const shortText = '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!'
// const longText = `${shortText}${shortText}${shortText}${shortText}`

// default to shortText, if length is not defined, default to text (which is short text)
const TextIntroPlainWidget = ({
  expandable = false, text = ''
}) => {
  return (
    <div> 
        {text}
    </div>
  )
}
TextIntroPlainWidget.displayName = 'TextIntroPlainWidget'

export default TextIntroPlainWidget
