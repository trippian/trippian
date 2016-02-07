import React from 'react'
import {
  TrippianListItemWidget, NoContentWidget
}
from '../index'

var trippians = [{
  "name": "Joe Lagasse",
  "slogan": "lalalal",
  "profilePicture": "http://lorempixel.com/400/200/animals/",
  "averageRating": 1,
  "contactPreference": "you can contact me at u know",
  "id": 1
}, {
  "name": "desperate elli",
  "slogan": "lalalal",
  "profilePicture": "http://lorempixel.com/400/200/animals/",
  "averageRating": 3,
  "contactPreference": "call me pls....",
  "id": 2
}, {
  "name": "creepy Andy",
  "slogan": "lalala",
  "profilePicture": "http://lorempixel.com/400/200/animals/",
  "averageRating": 4,
  "contactPreference": "call me bae",
  "id": 3
}, {
  "name": "creepy Andy",
  "slogan": "lalala",
  "profilePicture": "http://lorempixel.com/400/200/animals/",
  "averageRating": 5,
  "contactPreference": "call me bae",
  "id": 3
}]

const TrippianListWidget = ({
  dataList = trippians, noContentMessage = 'There is no trippian'
}) => {
  console.log('inside', dataList)
  return (
    <div className="popular-trippians section-body clearfix">
        {dataList.length === 0 && 
                <NoContentWidget message={noContentMessage} />
        }
        {
          dataList.map((trippian, key) => (
            <TrippianListItemWidget key={key} {...trippian} />
            ))
        }
      </div>
  )
}

TrippianListWidget.displayName = 'TrippianListWidget'

export default TrippianListWidget
