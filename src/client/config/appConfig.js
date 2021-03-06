/*
Config the app's front-end
Make sure the containers and components are in alphabetic / logic order
*/

const env = 'production' // comment this out for development
  // const env = 'develop' // comment this out for production

let HOST = window.location.origin // enable this for deploy 
  // let HOST = 'http://localhost:4000'
let isTranslationMode = true // need to turn logger off for translation
let logOn = false
let showAdminButtons = false

function setVariablesByEnv() {
  if (env === 'develop') {
    HOST = 'http://localhost:4000'
    logOn = true
    isTranslationMode = false,
      showAdminButtons = true // set false for deployment if true, will not show buttons such as 'Load dummy data', 'clear values'... 
  }
}
setVariablesByEnv()

// reusable configs 
const defaults = {
  logo: 'https://s3-us-west-1.amazonaws.com/trippian/logo-trans-white.png',
  jumbotronBackground: 'http://media-cdn.tripadvisor.com/media/photo-s/06/04/b0/fb/how-about-a-trip-to-paradise.jpg',
  circleImageBackground: 'https://pixabay.com/static/uploads/photo/2014/06/01/18/33/cat-359915_960_720.jpg',
  link: 'http://www.trippian.com',
  imageAlt: 'trippian image',
  noContentMessage: 'There is no content',
  form: {
    buttons: {
      submit: 'Submit Now',
      reset: 'Clear Values',
      load: 'Load Dummy Data'
    },
    destination: {
      labels: {
        name: 'Destiantion',
        description: 'Description',
        whyVisit: 'Why Visit',
        thumbnail: 'Thumbnail Image',
        feature: 'Feature Image',
        featureNote: 'If this is empty, the first uploaded photo will be used as feature'
      }
    },
    trippian: {
      labels: {
        name: 'Name',
        location: 'Location',
        mobile: 'Mobile',
        slogan: 'Slogan',
        website: 'Website',
        bio: 'Bio',
        introduction: 'Introduction'
      }
    },
    inquiry: {
      labels: {
        personCount: 'Number of People',
        startDate: 'Start Date',
        endDate: 'End Date',
        email: 'Email',
        mobile: 'Mobile',
        subject: 'Subject',
        content: 'Content'
      }
    },
    trip: {
      labels: {
        destination: 'Destination',
        title: 'Title',
        summary: 'Summary',
        details: 'Details',
        thumbnail: 'Thumbnail Image',
        feature: 'Feature',
        album: 'Album'
      }
    },
    review: {
      labels: {
        rating: 'Rating',
        title: 'Title',
        content: 'Content'
      }
    },
    user: {
      labels: {
        name: 'Full Name',
        email: 'Email',
        password: 'Password'
      }
    }

  },
  map: {
    initialZoom: 6,
    initalLat: 37.761260,
    initalLng: -122.415903,
    markerTitle: 'Trippian.com',
    shouldLoadInitialMap: false
  }
}

// main config file 
export default {
  defaults: defaults,
  appName: '',
  appDescription: 'your local travel companion',
  logo: defaults.logo,
  log: {
    logLevel: logOn ? 'warn' : 'error', // options: trace, debug, info, warn, error, fatal
    isTranslationMode: isTranslationMode
  },
  adminOnly: {
    showAdminButtons: showAdminButtons
  },
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
    defaultTripFeature: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
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
    poster: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    backupVideo: 'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4',
    backupPoster: 'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg',

    aboutPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    pressPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    destinationPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    inquiryDetailPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    loginPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    signUpPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    notFoundPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    tripPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    trippianPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    dashboardPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    adminPage: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg'
  },

  // general page titles (ref FooterWidget mostly)
  appPages: {
    home: 'Home',
    about: 'About',
    joinUs: 'Join Us',
    press: 'Press',
    becomeATrippian: 'Become a Trippian',
    myProfile: 'My Profile'
  },

  // containers
  Admin: {
    title: 'Admin Dashboard',
    subTitle: 'Manage all Trippian data ',
    noAccessMessage: 'You donot have access to this page. Login as admin first'
  },
  AdminDestinationList: {
    containerTitle: 'Destination List'
  },
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
    title: 'Our Story',
    subTitle: 'Passionate about bringing positive changes to the world',
    jumbotronBackgroud: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    sectionOneTitle: 'About Us',
    sectionOneContent: 'Trippian was created by four talented full stack engineers. Our mission is to connect with travelers with the best travel companions around the world. Reach out to us or check out code at  github.com/trippian (http://github.com/trippian).',
    teamSectionTitle: 'The Team',
    team: [{
      'name': 'Audrey Li',
      'github': 'https://github.com/vidaaudrey',
      'location': 'San Francisco',
      'role': 'Project Lead & Full Stack Software Engineeer',
      'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Audrey.jpg ',
      'about': 'I was raised in a small remote village in China, and had not been to a big city until I was 19. I am fascinated by different cultures and histories. I enjoy travelling and learning foreign languages, particularly Spanish, German, and French. '
    }, {
      'name': 'Elliot Chi',
      'github': 'https://github.com/elliotschi',
      'location': 'San Francisco',
      'role': 'Full Stack Software Engineer & Scrum Master',
      'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Elliot-1.jpg ',
      'about': 'I like to watch and play basketball.  I cheer for anyone that is playing against the Warriors.  I like going out and trying new food in San Francisco'
    }, {
      'name': 'Joe Lagasse',
      'github': 'https://github.com/jlag34',
      'location': 'San Francisco',
      'role': 'Full Stack Software Engineer',
      'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Joe.jpg ',
      'about': 'Leading the protests for more Qdobas in California, weekend security tester, lifter of all heavy things and living the vegetarian lifestyle since the days where your “friends” would put their lunch meat in your lunch box when you weren’t looking.'
    }, {
      'name': 'Yale Yuen',
      'github': 'https://github.com/ycube',
      'location': 'San Francisco',
      'role': 'Full Stack Engineer',
      'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Yale.jpg ',
      'about': 'Born and raised my whole life in San Francisco. I love to go drink boba, coffee, and milktea whenever I get a chance. Hobbies include e-sports and chilling with my dog'
    }]
  },
  App: {},
  Chat: {},
  Contact: {},

  Dashboard: {},
  MyProfile: {},
  MyInquiries: {
    containerTitle: 'My Inquiry List',
    noContentMessage: 'There is no inquiry yet'

  },
  MyPostedTrips: {
    containerTitle: 'My Posted Trips',
    noContentMessage: 'You have not posted any trips yet. Start now.',
    postTripButtonHideText: 'Hide Form',
    postTripButtonShowText: 'Create a Trip'

  },
  MyTripBox: {
    voteUp: {
      voteUpButtonShowText: 'Upvoted',
      voteUpButtonHideText: 'Hide Upvoted',
      containerTitle: 'A list of upvoted trips',
      noContentMessage: 'You have not upvoted any trips yet'
    },
    voteDown: {
      voteDownButtonShowText: 'Downvoted',
      voteDownButtonHideText: 'Hide Downvoted',
      containerTitle: 'A list of downvated trips',
      noContentMessage: 'You have not downvoted any trips yet'
    },
    savedTrip: {
      savedTripButtonShowText: 'Saved',
      savedTripButtonHideText: 'Hide Saved',
      containerTitle: 'A list of saved trips',
      noContentMessage: 'You have not saved any trips yet'
    }
  },
  MyDestinationPost: {
    containerTitle: 'My Posted Destinations',
    noContentMessage: 'You have not posted any destinations yet. Start now.',
    postDestinationButtonHideText: 'Hide Form',
    postDestinationButtonShowText: 'Create a Destination'

  },

  Destination: {},
  DestinationDetail: {
    whyVisitTitle: 'Why Visit',
    whyVisitSubtitle: '',
    descriptionTitle: 'Description',
    descriptionSubtitle: '',
    popularTripsTitle: 'Popular Trips',
    popularTripsSubtitle: '',
    map: defaults.map
  },
  DestinationList: {
    title: 'Destination List'
  },
  DestinationPost: {
    title: 'Post a Destination',
    subTitle: '',
    formTitle: 'Add a Destination'
  },
  DestinationSearchResults: {
    title: 'Destination Search Result',
    subTitle: ''
  },
  PopularDestinations: {
    title: 'Popular Destinations',
    subTitle: 'Explore the top rated destinations around the world'
  },
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
    subTitle: 'Building a beautiful social networks between travelers and local trip companions',
    jumbotronBackgroud: 'https://images.trvl-media.com/media/content/expus/graphics/launch/activity1320x742.jpg',
    sectionOneTitle: 'Join Us',
    sectionOneContent: 'We are a small team of four. If you have any ideas, let\'s talk more at github.com/trippian/ '
  },
  Login: {
    title: 'Destination Search Result',
    subTitle: ''
  },
  LoginSuccess: {},
  Logout: {},
  LoginWrapper: {
    title: 'Login',
    subTitle: 'Login to manage your trips and profile'
  },
  NotFound: {},
  Press: {
    title: 'Press',
    subTitle: 'Under construction, come back later',
    jumbotronBackgroud: 'https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg',
    sectionOneTitle: 'Press',
    sectionOneContent: 'For more info, please reach us at github.com/trippian'
  },
  Signup: {
    title: 'Signup'
  },
  SignupSuccess: {
    title: 'Login Successs',
    content: 'You logged in'
  },
  SignupWrapper: {
    title: 'Sign Up',
    subTitle: 'Sign up to explore trippian'
  },
  Terms: {},

  TripWrapper: {},
  Trip: {},
  TripDetail: {
    summarySectionTitle: 'Summary',
    detailsSectionTitle: 'Details',
    photosSectionTitle: 'Photos'
  },
  PopularTrips: {
    title: 'Popular Trips',
    subTitle: 'Explore the popular trips aroudn the world'

  },

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
  TrippianProfileWidget: {
    bioSectionTitle: 'Bio',
    bioSectionSubtitle: '',
    introductionSectionTitle: 'Introduction',
    introductionSectionSubtitle: ''
  },
  TrippianSignup: {
    title: 'Become a Trippian',
    subTitle: 'Show great trips to the travelers around the world',
    formTitle: 'Sign up to become a trippian'
  },
  TrippianList: {},
  TrippianEdit: {},


  // Components 
  AdminInquiryDetailWidget: {},
  AdminMenuWidget: {
    destination: {
      text: 'Destination',
      link: 'admin/destination'
    },
    user: {
      text: 'User',
      link: 'admin/user'
    },
    trippian: {
      text: 'Trippian',
      link: 'admin/trippian'
    },
    inquiry: {
      text: 'Inquiry',
      link: 'admin/inquiry'
    },
    trip: {
      text: 'Trip',
      link: 'admin/trip'
    },
    dashboard: {
      text: 'Dashboard',
      link: 'dashboard'
    }
  },
  AvatarWidget: {
    link: defaults.link,
    imgSrc: defaults.circleImageBackground,
    title: defaults.imageAlt
  },
  AlertAutoDismissableWidget: {},
  AutoSuggestBoxWidget: {
    placeholderText: 'Search places',
    fixtures: [{
      label: 'Hong Kong',
      location: {
        lat: 22.396428,
        lng: 114.10949700000003
      }
    }, {
      label: 'New York, NY, United States',
      location: {
        lat: 40.7033127,
        lng: -73.979681
      }
    }, {
      label: 'Chengdu, Sichuan, China',
      location: {
        lat: 30.664135,
        lng: 104.046669
      }
    }, {
      label: 'Rio de Janeiro - State of Rio de Janeiro, Brazil',
      location: {
        lat: -22.066452,
        lng: -42.9232368
      }
    }, {
      label: 'Tokyo, Japan',
      location: {
        lat: 35.673343,
        lng: 139.710388
      }
    }]
  },
  CarouselWidget: {
    images: [defaults.circleImageBackground, defaults.circleImageBackground],
    imageWidth: 900,
    imageHeight: 500,
    imageAlt: defaults.imageAlt,
    captionTitle: '',
    cpationContent: ''
  },
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
  SectionHeaderWidget: {
    // defaults, better keep it clean 
    title: '',
    subTitle: ''
  },
  DashboardMenuWidget: {
    myProfile: {
      text: 'My Profile',
      link: 'dashboard/my-profile'
    },
    myInquiries: {
      text: 'My Inquiries',
      link: 'dashboard/my-inquiries'
    },
    myTripBox: {
      text: 'My Trip Box',
      link: 'dashboard/my-trip-box'
    },
    myPostedTrips: {
      text: 'Posted Trips',
      link: 'dashboard/my-posted-trips'
    },
    createDestination: {
      text: 'Create a Destination',
      link: 'dashboard/destination-post'
    },
    logout: {
      text: 'Logout',
      link: 'login/logout'
    },
    admin: {
      text: 'Admin',
      link: 'admin'
    }
  },
  DestinationListItemWidget: {},
  DestinationListWidget: {},
  DestinationPostFormWidget: {
    labels: {
      ...defaults.form.destination.labels
        // name: 'new name description' // add any additional fields if necessary
    },
    buttons: {
      ...defaults.form.buttons
    }
  },
  DropFileWidget: {
    maxNumberOfFilesAllowed: 5,
    exceedMaxNumberOfFilesErrorMessage: 'Sorry, maximum 5 files are allowed',
    dropMessage: 'Try drop some fiels here or click to select files to upload',
    fileUploadingMessage: 'Total number of files to be uploaded:',
    fileUploadedMessage: 'Total uploaded files:'
  },
  DummyRichTextWidget: {},
  UserPostFormWidget: {},
  TrippianPostFormWidget: {
    labels: {
      ...defaults.form.trippian.labels
    },
    buttons: {
      ...defaults.form.buttons
    }
  },
  InquiryPostFormWidget: {
    labels: {
      ...defaults.form.inquiry.labels
    },
    buttons: {
      ...defaults.form.buttons
    }
  },
  TripPostFormWidget: {
    labels: {
      ...defaults.form.trip.labels
    },
    buttons: {
      ...defaults.form.buttons
    }
  },
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
  IconWidget: {},
  ImageLoaderWidget: {},
  InquiryListWidget: {},
  InquiryListItemWidget: {},
  JumbotronWidget: {},
  JumbotronHomeWidget: {
    title: 'Start Now',
    subTitle: 'Find your local trip around the world'
  },
  JumbotronInquiryWidget: {
    title: 'Contact',
    subTitle: 'Send your inquiry to the trippian'
  },
  JumbotronDestinationWidget: {},
  JumbotronDashboardWidget: {
    title: 'Dashboard',
    subTitle: 'Manage all info in one place'
  },
  JumbotronShortWidget: {
    title: '',
    subTitle: ''
  },
  JumbotronTrippianWidget: {},
  JumbotronTripWidget: {},
  JumbotronTitleWidget: {},
  JumbotronMetaAreaWidget: {},
  JumbotronPlainBgWidget: {},
  JumbotronVideoWidget: {},
  LikeCounterWidget: {},
  LocaleMenuWidget: {},
  LoginButtonsWidget: {
    facebook: 'Login with Facebook',
    google: 'Login with Google'
  },
  LoginFormWidget: {},
  NavUserMenuWidget: {},
  NavWidget: {
    srToggleText: 'Toggle navigation',
    logo: defaults.logo,
    becomeATrippianButtonText: 'Become a Trippian',
    loginButtonText: 'Login'
  },
  NoContentWidget: {
    noContentMessage: defaults.noContentMessage
  },
  OperationMenuWidget: {},
  PaginationWidget: {},
  RelativeTimeWidget: {},
  ReviewAddFormWidget: {
    labels: {
      ...defaults.form.review.labels
    },
    buttons: {
      ...defaults.form.buttons,
        submit: 'Add My Review'
    }
  },
  ReviewListItemWidget: {},
  ReviewListWidget: {},
  PreviewImageWidget: {},
  SaveTripButtonWidget: {},
  SearchBoxWidget: {
    placeholderText: 'Bali',
    searchButtonText: 'Go'
  },
  StarRatingWidget: {},
  SendButtonIntl: {},
  SignupButtonsWidget: {
    facebook: 'Signup with Facebook',
    google: 'Signup with Google'
  },
  SignupFormWidget: {
    labels: {
      ...defaults.form.user.labels
    },
    buttons: {
      ...defaults.form.buttons,
        submit: 'Sign Up'
    }
  },
  TextIntroPlainWidget: {},
  TextIntroRichWidget: {},
  TrippianListWidget: {
    noContentMessage: 'There is no trippian'
  },
  TrippianListItemWidget: {},
  TrippianListRoundWidget: {
    noContentMessage: 'There is no trippian'

  },
  TrippianListItemRoundWidget: {},
  TrippianSignupFormWidget: {},
  TripsTableWidget: {},
  TripListWidget: {
    noContentMessage: 'There is no trip yet. '
  },
  TripListItemWidget: {},
  TeamCardWidget: {},
  TeamCardsWidget: {},
  VoteWidget: {},
  UserMenuWidget: {},
  UserProfileWidget: {},
  UserLinkWidget: {},
  VideoBackground: {}
}
