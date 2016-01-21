import React from 'react'
import {
  injectIntl,
  FormattedRelative
}
from 'react-intl'

/*
Component adapted from react-intl 2.0
Ref: https://github.com/yahoo/react-intl/blob/master/UPGRADE.md
<RelativeTimeWidget date="Wed Jan 20 2014 19:36:40 GMT-0800 (PST)" intl='en' />
will display 2 years ago. 
*/


const to2Digits = (num) => `${num < 10 ? `
0 $ {
  num
}
` : num}`

const RelativeTimeWidget = ({
  date, intl
}) => {
  date = new Date(date)

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  let formattedDate = intl.formatDate(date, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })

  return (
    <time dateTime={`${year}-${to2Digits(month)}-${to2Digits(day)}`} title={formattedDate}>
     <FormattedRelative value={date} />
    </time>
  )
}

RelativeTimeWidget.displayName = 'RelativeTimeWidget'

export default injectIntl(RelativeTimeWidget)
