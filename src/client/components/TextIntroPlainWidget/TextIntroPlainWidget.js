import React from 'react'

const shortText = '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!'
const longText = `${shortText}${shortText}${shortText}${shortText}`

const TextIntroPlainWidget = ({
  length = 99, expandable = false
}) => {
  return (
    <div> 
        {length < 100 ? shortText : longText }
    </div>
  )
}
TextIntroPlainWidget.displayName = 'TextIntroPlainWidget'

export default TextIntroPlainWidget
