 // store big state object (multiple config) here
 //App State 
 export const appState = {
   locale: 'en-US',
   availableLocales: ['en-US', 'zh', 'es'],
   isFormSubmitted: false,
   isFormSubmitting: false,
   files: [],
   searchText: {
     label: 'San Francisco, CA, United States',
     location: {
       lat: 37.7749295,
       lng: -122.41941550000001
     }
   }
 }
 export const alert = {
   type: 'success',
   title: '',
   message: ''
 }

 //TODO, Update once auth is in place 
 export const user = {
   isAuthed: true,
   isAdmin: true,
   isTrippian: true, // currently is named trippian
   trippian: true, // TODO: remove 
   username: 'elliot',
   displayName: 'Elliot',
   email: 'elliot@trippian.com',
   id: 32,
   facebookId: 955195534516978, //TODO: remove
   googleId: 1,
   picture: 'http://lorempixel.com/200/200/people/'
 }

 // API
 export const trippian = {
   name: '',
   location: '',
   mobile: '',
   slogan: '',
   website: '',
   bio: '',
   introduction: '',

   availabileTime: '',
   numberOfReviews: 0,
   avarageRating: 0,
   facebookId: null,
   picture: 'http://lorempixel.com/200/200/people/'
 }
 export const trip = {
   netVote: 0,
   totalVotes: 0,
   destination: '',
   title: '',
   summary: '',
   details: '',
   feature: 'http://lorempixel.com/400/200/city/',
   album: []
 }
 export const review = {
   createdAt: '',
   username: '',
   facebookId: '',
   userAvatar: '',
   userId: '',
   rating: 0,
   title: '',
   content: ''
 }
 export const destination = {
   feature: 'http://lorempixel.com/200/200/people/',
   name: '',
   whyVisit: '',
   description: '',
   slogan: 'awesome city',
   averageRating: 5,
   popularTrips: [trip],
   album: []
 }


 export const inquiry = {
   type: 'INQUIRY',
   start: 0,
   end: 1,
   properties: {
     createdAt: '',
     senderId: 0,
     receiverId: 0,
     personCount: 5,
     startDate: '2015-02-14',
     endDate: '2015-02-28',
     email: '',
     mobile: '',
     subject: 'hi',
     content: '',
     accepted: false
   }
 }

 export const dashboard = {
   // user
   isAdmin: true,
   isTrippian: true, // currently is named trippian
   trippian: true, // TODO: remove 
   username: 'elliot',
   displayName: 'Elliot',
   email: 'elliot@trippian.com',
   id: 32,
   facebookId: 955195534516978, //TODO: remove
   googleId: 1,
   picture: 'http://lorempixel.com/200/200/people/',

   //trippian
   name: '',
   location: '',
   mobile: '',
   slogan: '',
   website: '',
   bio: '',
   introduction: '',

   // additional info 
   numberOfReviews: 0,
   averageRating: 0,
   totalRating: 0,
   inquiries: [inquiry],
   postedTrips: [trip],
   upVotedTrips: [trip],
   downVotedTrips: [trip],
   savedTrips: []
 }
