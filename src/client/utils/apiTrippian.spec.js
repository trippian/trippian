import {
  getDestinationById, getTrippianById
}
from './apiTrippian'
import {
  expect
}
from '../helpers/clientTestHelpers'

// import config from '../../shared/config/config'


describe('apiTrippian', () => {
  describe('getDestinationById', () => {
    it('should return the right json data for Destination', () => {
      getDestinationById(1).then(data => {
        // console.log('got data from server', data)
        // const expected = `http://localhost:4000/api/destination/${1}`
        expect(data).to.equal(destination)
      })
    })
  })

  describe('getTrippianById', () => {
    it('should return the right json data for Trippian', () => {
      getTrippianById(1).then(data => {
        expect(data).to.equal(trippian)
      })
    })
  })

})

const trippian = {
  "name": "Lorem ipsum dolor.",
  "contactInfo": "Lorem ipsum Commodo occaecat consectetur incididunt.",
  "intro": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eos deleniti ratione libero possimus eum, modi dolor odit quaerat explicabo animi quae quos minus est, maxime voluptas facere ipsa laboriosam!",
  "profilePicture": "http://lorempixel.com/400/200/animals/",
  "trips": [{
    "title": "Lorem ipsum Consectetur deserunt id dolore.",
    "rating": 4,
    "numberOfRatings": 100,
    "details": "Lorem ipsum Incididunt dolore ad exercitation voluptate cupidatat in occaecat velit dolore ut amet dolor ex anim amet labore adipisicing velit deserunt Ut incididunt aute ut culpa commodo."
  }, {
    "title": "Lorem ipsum Consectetur deserunt id dolore.",
    "rating": 4,
    "numberOfRatings": 100,
    "details": "Lorem ipsum Incididunt dolore ad exercitation voluptate cupidatat in occaecat velit dolore ut amet dolor ex anim amet labore adipisicing velit deserunt Ut incididunt aute ut culpa commodo."
  }]
}



const destination = {
  "destinationName": "Lorem ipsum dolor.",
  "destinationDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eos deleniti ratione libero possimus eum, modi dolor odit quaerat explicabo animi quae quos minus est, maxime voluptas facere ipsa laboriosam!",
  "destinationImage": "http://lorempixel.com/400/200/animals/",
  "trips": [{
    "title": "Lorem ipsum Deserunt aute sunt do laborum.",
    "rating": 4,
    "numberOfRatings": 100,
    "summary": "Lorem ipsum Dolore nostrud aliqua in laborum."
  }, {
    "title": "Lorem ipsum Deserunt aute sunt do laborum.",
    "rating": 5,
    "numberOfRatings": 200,
    "summary": "Lorem ipsum Dolore nostrud aliqua in laborum."
  }]
}
