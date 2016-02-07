/*
Config the app's front-end
Make sure the page and components are in alphabetic order
*/

//TODO: read HOST from a get request or send it by cookie 
// const HOST = window.location.origin // enable this for deploy 

// const HOST = 'http://trippian.com'
const HOST = 'http://localhost:4000' // enable this for react dev

// reusable configs 
const defaults = {
  jumbotronBackground: 'http://media-cdn.tripadvisor.com/media/photo-s/06/04/b0/fb/how-about-a-trip-to-paradise.jpg',
  circleImageBackground: 'https://pixabay.com/static/uploads/photo/2014/06/01/18/33/cat-359915_960_720.jpg',
  link: 'http://www.trippian.com',
  imageAlt: 'trippian image',
  map: {
    initialZoom: 6,
    initalLat: 37.761260,
    initalLng: -122.415903,
    markerTitle: 'Trippian.com',
    shouldLoadInitialMap: false
  }
}

export default {
  defaults: defaults,
  appName: '',
  appDescription: 'your local travel companion',
  API_HOST: `${HOST}/api/`,
  Server_HOST: `${HOST}`,
  admin: {
    defaultTrippianIDForInquiry: 471
  },
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
    defaultAvatar: 'http://funny-pics.info/wp-content/uploads/2015/12/Crazy-Cats-cqpX.jpg',
    spinner: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Spinner_font_awesome.svg/512px-Spinner_font_awesome.svg.png',
    placeholder: 'http://www.aviatorcameragear.com/wp-content/uploads/2012/07/placeholder.jpg'
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
    homePage: '',
    landingVideo: 'https://s3-us-west-1.amazonaws.com/trippian/backgroundVideo.mp4',
    poster: 'http://media-cdn.tripadvisor.com/media/photo-s/06/04/b0/fb/how-about-a-trip-to-paradise.jpg',
    backupVideo: 'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4',
    backupPoster: 'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg',

    aboutPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    pressPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    destinationPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    inquiryDetailPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    loginPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    signUpPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    notFoundPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    tripPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    trippianPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    dashboardPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    adminPage: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg'
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
  // homePage: {
  //   jumbotron: {
  //     title: 'Start Now',
  //     subTitle: 'Find your local trip companion around the world'
  //   },
  //   popularDestinations: {
  //     title: 'Popular Destinations',
  //     subTitle: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet.'
  //   },
  //   popularTrippians: {
  //     title: 'Popular Trippians',
  //     subTitle: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet.'
  //   }
  // },
  // aboutPage: {
  //   title: 'About',
  //   subTitle: 'Lorem ipsum dolor sit.',
  //   jumbotronBackgroud: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
  //   sectionOneTitle: 'About Us',
  //   sectionOneContent: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!',
  //   teamSectionTitle: 'The Team',
  //   team: [{
  //     'name': 'Audrey Li',
  //     'location': 'San Francisco',
  //     'role': 'Project Owner & Software Engineeer',
  //     'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Audrey.jpg ',
  //     'about': 'I was raised in a small remote village in China, and had not been to a big city until I was 19. I am fascinated by different cultures and histories. I enjoy travelling and learning foreign languages, particularly Spanish, German, and French. '
  //   }, {
  //     'name': 'Elliot Chi',
  //     'location': 'San Francisco',
  //     'role': 'Software Engineer & Scrum Master',
  //     'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Elliot-1.jpg ',
  //     'about': 'I enjoy watching the Warriors and cheering for Steph Curry. I have a man crush on him. I enjoy watching the Warriors and cheering for Steph Curry. I have a man crush on him.'
  //   }, {
  //     'name': 'Joe Lagasse',
  //     'location': 'San Francisco',
  //     'role': 'Software Engineer',
  //     'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Joe.jpg ',
  //     'about': 'Leading the protests for more Qdobas in California, weekend security tester, lifter of all heavy things and living the vegetarian lifestyle since the days where your “friends” would put their lunch meat in your lunch box when you weren’t looking.'
  //   }, {
  //     'name': 'Yale Yuen',
  //     'location': 'San Francisco',
  //     'role': 'Software Engineer',
  //     'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Yale.jpg ',
  //     'about': 'I am basically married. Elliot is my side piece.I am basically married. Elliot is my side piece.I am basically married. Elliot is my side piece.'
  //   }]
  // },
  // joinUsPage: {
  //   title: 'Join Us',
  //   subTitle: 'Lorem ipsum dolor sit.',
  //   jumbotronBackgroud: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
  //   sectionOneTitle: 'Join Us',
  //   sectionOneContent: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!',
  // },
  // pressPage: {
  //   title: 'Press',
  //   subTitle: 'Lorem ipsum dolor sit.',
  //   jumbotronBackgroud: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
  //   sectionOneTitle: 'Press',
  //   sectionOneContent: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!',
  // },
  // becomeATrippianPage: {
  //   title: 'Become a Trippian',
  //   subTitle: 'Lorem ipsum dolor sit.',
  //   formTitle: 'Sign up to become a trippian'
  // },

  // destinationPostPage: {
  //   title: 'Post a Destination',
  //   subTitle: 'Lorem ipsum dolor sit.',
  //   formTitle: 'Add a Destination'
  // },
  // destinationDetailPage: {
  //   whyVisitTitle: 'Why Visit',
  //   whyVisitSubtitle: '',
  //   popularTripsTitle: 'Popular Trips',
  //   popularTripsSubtitle: '',
  //   map: {
  //     initialZoom: 6,
  //     initalLat: 37.761260,
  //     initalLng: -122.415903,
  //     markerTitle: 'Trippian.com',
  //     shouldLoadInitialMap: false
  //   }
  // },
  // destinationListPage: {
  //   title: 'Destination List'
  // },
  // destinationSearchResultsPage: {
  //   title: 'Destination Search Result',
  //   subTitle: ''
  // },
  // trippianDetailPage: {
  //   bioSectionTitle: 'Bio',
  //   bioSectionSubtitle: '',
  //   introductionSectionTitle: 'Introduction',
  //   introductionSectionSubtitl: '',
  //   myTripsSectionTitle: 'My Trips',
  //   myTripsSectionSubtitle: '',
  //   reviewsSectionTitle: 'Reviews',
  //   reviewsSectionSubtitle: '',
  //   addReviewSectionTitle: 'Add a Review',
  //   addReviewSectionSubtitle: ''
  // },
  // loginPage: {
  //   title: 'Destination Search Result',
  //   subTitle: ''
  // },
  // loginWrapper: {
  //   jumbotronTitle: 'Login',
  //   jumbotronSubtile: ''
  // },

  // containers
  Admin: {},
  AdminDestinationList: {},
  AdminDestinationListItem: {},
  AdminDestinationListItemEdit: {},
  AdminTrippianList: {},
  AdminTrippianListItem: {},
  AdminTrippianListItemEdit: {},
  AdminInquiryList: {},
  AdminInquiryListItem: {},
  AdminInquiryListItemEdit: {},
  AdminTripList: {},
  AdminTripListItem: {},
  AdminTripListItemEdit: {},
  AdminUserList: {},
  AdminUserListItem: {},
  AdminUserListItemEdit: {},

  About: {
    title: 'About',
    subTitle: 'Lorem ipsum dolor sit.',
    jumbotronBackgroud: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    sectionOneTitle: 'About Us',
    sectionOneContent: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!',
    teamSectionTitle: 'The Team',
    team: [{
      'name': 'Audrey Li',
      'location': 'San Francisco',
      'role': 'Project Owner & Software Engineeer',
      'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Audrey.jpg ',
      'about': 'I was raised in a small remote village in China, and had not been to a big city until I was 19. I am fascinated by different cultures and histories. I enjoy travelling and learning foreign languages, particularly Spanish, German, and French. '
    }, {
      'name': 'Elliot Chi',
      'location': 'San Francisco',
      'role': 'Software Engineer & Scrum Master',
      'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Elliot-1.jpg ',
      'about': 'I enjoy watching the Warriors and cheering for Steph Curry. I have a man crush on him. I enjoy watching the Warriors and cheering for Steph Curry. I have a man crush on him.'
    }, {
      'name': 'Joe Lagasse',
      'location': 'San Francisco',
      'role': 'Software Engineer',
      'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Joe.jpg ',
      'about': 'Leading the protests for more Qdobas in California, weekend security tester, lifter of all heavy things and living the vegetarian lifestyle since the days where your “friends” would put their lunch meat in your lunch box when you weren’t looking.'
    }, {
      'name': 'Yale Yuen',
      'location': 'San Francisco',
      'role': 'Software Engineer',
      'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Yale.jpg ',
      'about': 'I am basically married. Elliot is my side piece.I am basically married. Elliot is my side piece.I am basically married. Elliot is my side piece.'
    }]
  },
  App: {},
  Chat: {},
  Contact: {},

  Dashboard: {},
  MyProfile: {},
  MyInquiries: {},
  MyPostedTrips: {},
  MyTripBox: {},

  Destination: {},
  DestinationDetail: {
    whyVisitTitle: 'Why Visit',
    whyVisitSubtitle: '',
    popularTripsTitle: 'Popular Trips',
    popularTripsSubtitle: '',
    map: defaults.map
  },
  DestinationList: {
    title: 'Destination List'
  },
  DestinationPost: {
    title: 'Post a Destination',
    subTitle: 'Lorem ipsum dolor sit.',
    formTitle: 'Add a Destination'
  },
  DestinationSearchResults: {
    title: 'Destination Search Result',
    subTitle: ''
  },
  PopularDestinations: {},
  DestinationWrapper: {},

  EmailNotification: {},

  InquiryAdd: {},
  InquiryList: {},
  InquiryDetail: {},

  IntlDemo: {},
  Home: {
    jumbotron: {
      title: 'Start Now',
      subTitle: 'Find your local trip companion around the world'
    },
    popularDestinations: {
      title: 'Popular Destinations',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet.'
    },
    popularTrippians: {
      title: 'Popular Trippians',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet.'
    }
  },
  JoinUs: {
    title: 'Join Us',
    subTitle: 'Lorem ipsum dolor sit.',
    jumbotronBackgroud: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    sectionOneTitle: 'Join Us',
    sectionOneContent: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!',
  },
  Login: {
    title: 'Destination Search Result',
    subTitle: ''
  },
  LoginSuccess: {},
  Logout: {},
  LoginWrapper: {
    jumbotronTitle: 'Login',
    jumbotronSubtile: ''
  },
  NotFound: {},
  pressPage: {
    title: 'Press',
    subTitle: 'Lorem ipsum dolor sit.',
    jumbotronBackgroud: 'http://recwell.umd.edu/portals/0/Photos/MAP-trips.jpg',
    sectionOneTitle: 'Press',
    sectionOneContent: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!',
  },
  Signup: {},
  SignupSuccess: {},
  SignupWrapper: {},
  Terms: {},

  TripWrapper: {},
  Trip: {},
  TripDetail: {},
  PopularTrips: {},

  Trippian: {},
  TrippianDetail: {
    bioSectionTitle: 'Bio',
    bioSectionSubtitle: '',
    introductionSectionTitle: 'Introduction',
    introductionSectionSubtitl: '',
    myTripsSectionTitle: 'My Trips',
    myTripsSectionSubtitle: '',
    reviewsSectionTitle: 'Reviews',
    reviewsSectionSubtitle: '',
    addReviewSectionTitle: 'Add a Review',
    addReviewSectionSubtitle: ''
  },
  TrippianSignUp: {
    title: 'Become a Trippian',
    subTitle: 'Lorem ipsum dolor sit.',
    formTitle: 'Sign up to become a trippian'
  },
  TrippianList: {},
  TrippianEdit: {},


  // Components 
  AdminInquiryDetailWidget: {},
  AvatarWidget: {},
  AlertAutoDismissableWidget: {},
  AutoSuggestBoxWidget: {},
  CarouselWidget: {},
  CircleImageWidget: {
    link: defaults.link,
    imageSrc: defaults.circleImageBackground,
    title: defaults.imageAlt
  },
  CircleImageLinkWidget: {
    link: defaults.link,
    imageSrc: defaults.circleImageBackground,
    title: defaults.imageAlt
  },
  ContactButtonWidget: {
    text: 'Contact',
    to: 'trippian/32'
  },
  CrumbWidget: {},
  SectionHeaderWidget: {},
  DashboardMenuWidget: {},
  DestinationListItemWidget: {},
  DestinationListWidget: {},
  DestinationPostFormWidget: {},
  DropFileWidget: {},
  DummyRichTextWidget: {},
  UserPostFormWidget: {},
  TrippianPostFormWidget: {},
  InquiryPostFormWidget: {},
  TripPostFormWidget: {},
  FacebookAvatarWidget: {},
  FacebookLoginWidget: {},
  FooterWidget: {
    home: {
      text: 'Home',
      link: '/'
    },
    about: {
      text: 'About',
      link: 'about'
    },
    joinUs: {
      text: 'Join Us',
      link: 'join-us'
    },
    press: {
      text: 'Press',
      link: 'press'
    }
  },
  GooglePlacesWidget: {},
  GoogleMapWidget: {},
  HelloWorldWidget: {},
  IconWidget: {
    formTitle: 'Submit Inquiry Now'
  },

  ImageLoaderWidget: {},
  InquiryAddFormWidget: {},
  InquiryListWidget: {},
  InquiryListItemWidget: {},
  JumbotronWidget: {},
  JumbotronHomeWidget: {
    title: 'Start Now',
    subTitle: 'Find your local trip around the world'
  },
  JumbotronInquiryWidget: {
    title: 'Contact',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur.'
  },
  JumbotronDestinationWidget: {},
  JumbotronDashboardWidget: {},
  JumbotronShortWidget: {},
  JumbotronTrippianWidget: {},
  JumbotronTripWidget: {},
  JumbotronTitleWidget: {},
  JumbotronMetaAreaWidget: {},
  JumbotronPlainBgWidget: {},
  JumbotronVideoWidget: {},
  LikeCounterWidget: {},
  LocaleMenuWidget: {},
  LoginButtonsWidget: {},
  LoginFormWidget: {},
  NavUserMenuWidget: {},
  NavWidget: {},
  NoContentWidget: {},
  OperationMenuWidget: {},
  PaginationWidget: {},
  RelativeTimeWidget: {},
  ReviewAddFormWidget: {},
  ReviewListItemWidget: {},
  ReviewListWidget: {},
  PreviewImageWidget: {},
  SaveTripButton: {},
  SearchBoxWidget: {
    placeholderText: 'Bali',
    searchButtonText: 'Go'
  },
  StarRatingWidget: {},
  SendButtonIntl: {},
  SignupButtonsWidget: {},
  SignupFormWidget: {},
  TextIntroPlainWidget: {},
  TextIntroRichWidget: {},
  TrippianListWidget: {},
  TrippianListItemWidget: {},
  TrippianListRoundWidget: {},
  TrippianListItemRoundWidget: {},
  TrippianSignupFormWidget: {},
  TripsTableWidget: {},
  TripListWidget: {},
  TripListItemWidget: {},
  TeamCardWidget: {},
  TeamCardsWidget: {},
  VoteWidget: {},
  UserMenuWidget: {},
  UserProfileWidget: {},
  UserLinkWidget: {},
  TrippianProfileWidget: {},
  VideoBackground: {}
}
