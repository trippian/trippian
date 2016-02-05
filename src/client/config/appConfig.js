/*
Config the app's front-end
Make sure the page and components are in alphabetic order
*/

//TODO: read HOST from a get request or send it by cookie 
// const HOST = window.location.origin 
// const HOST = 'http://trippian.com'
const HOST = 'http://localhost:4000'
export default {
  appName: '',
  appDescription: 'your local travel companion',
  API_HOST: `${HOST}/api/`,
  Server_HOST: `${HOST}`,
  routeConfig: {
    trippian: 'trippian',
    destination: 'destination',
    user: 'user',
    dashboard: 'dashboard',
    trip: 'trip',
    saveTrip: 'saveTrip',
    inquiry: 'inquiry',
    review: 'rating',
    vote: 'vote',
    s3: '/signS3',
    googleAuth: `${HOST}/auth/google`,
    facebookAuth: `${HOST}/auth/facebook`,
    logout: `${HOST}/auth/logout`
  },
  photos: {
    defaultFeature: 'http://media-cdn.tripadvisor.com/media/photo-s/06/04/b0/fb/how-about-a-trip-to-paradise.jpg',
    defaultTripFeature: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    defaultDestinationFeature: 'http://media-cdn.tripadvisor.com/media/photo-s/06/04/b0/fb/how-about-a-trip-to-paradise.jpg',
    defaultAvatar: 'http://funny-pics.info/wp-content/uploads/2015/12/Crazy-Cats-cqpX.jpg'
  },
  S3: {
    baseUrl: 'https://s3-us-west-1.amazonaws.com/trippian/',
    userPath: 'user/',
    tripPath: 'trip/',
    destinationPath: 'destination/',
    assets: 'assets/'
  },
  // all the page background photos stored in S3 
  assetsURL: {
    homePage: ''
  },

  // general page titles 
  appPages: {
    home: 'Home',
    about: 'About',
    joinUs: 'Join Us',
    press: 'Press',
    becomeATrippian: 'Become a Trippian',
    myProfile: 'My Profile'
  },
  // specfic pages 
  homePage: {
    popularDestinations: {
      title: 'Popular Destinations',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet.'
    },
    popularTrippians: {
      title: 'Popular Trippians',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet.'
    }
  },
  becomeATrippianPage: {
    title: 'Become a Trippian',
    subTitle: 'Lorem ipsum dolor sit.',
    formTitle: 'Sign up to become a trippian'
  },

  destinationPostPage: {
    title: 'Post a Destination',
    subTitle: 'Lorem ipsum dolor sit.',
    formTitle: 'Add a Destination'
  },

  // Components 
  AvatarWidget: {

  },
  CircleImageWidget: {

  },
  ContactButtonWidget: {

  },
  NavUserMenuWidget: {

  },
  NavWidget: {

  },
  NoContentWidget: {

  },
  ReviewAddFormWidget: {

  },
  InquiryAddFormWidget: {
    formTitle: 'Submit Inquiry Now'
  },
  JumbotronHomeWidget: {
    title: 'Start Now',
    subTitle: 'Find your local trip around the world'
  },
  JumbotronInquiryWidget: {
    title: 'Contact',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur.'
  },
  ReviewListWidget: {

  },
  SearchBoxWidget: {
    placeholderText: 'Bali',
    searchButtonText: 'Go'
  },
  TrippianSignupFormWidget: {

  }

}
