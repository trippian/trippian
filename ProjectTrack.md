##Trippian Project Track 
We created this file to track the whole project, including important info, notices, daily meeting memos and any other project related materials that we share. 

After our daily meeting, we'll move the tasks under meeting memo to Github issues so that we can better track our progress.

### Group Check-in 


### Server & Client Feature Track 
- Server 
  - [X] Add 'http://' in front of picture field. Currently it is stored as "graph.facebook.com/955195534516978/picture?height=500"
  - [X] Add 'location' and 'rating' to trippian data 
  - [X] Review routes 
  - [ ] Add more destination data 
  - [ ] Add destination photos to database
- Client 
  - [ ] Localize the whole front-end 
  - [ ] Handle form submit with redux-form
  - [ ] Move Common API logic to redux store from the Container 
  - [ ] Improve Redux Store 
- General 
  - [ ] Clean up front-end messages 

- Admin 
  - [X] Delete Trip By Id
  - [X] Trip Detail 
  - [X] Inquiry Detail 
  - [X] Add Inquiry Form 
  - [X] Delete Inquiry By Id
  - [X] User Detail 
  - [X] Add User Form 
  - [X] Delete User By Id 
  - [X] Trippian Detail 
  - [X] Delete Trippian By ID
  - [X] Add Trippian Form 

- Front-end 
  - [X] DestinationDetailPage
  - [X] ReviewList 
  - [X] Add Review Form 
  - [X] PopularTrippiansList
  - [X] Dashboard: Saved/Voted Trip 
  - [X] Add Trip Detail Page 
  - [X] Add Map Display 
  - [X] Signup Form 
  - [ ] Signin Form 
  - [X] OperationMenuWidget (hold edit, delete... buttons) - Audrey
  - [ ] Hide 'Load Dummy Data' from non-admin users 
  - [ ] Fix save button position in trip list 
  - [ ] Fix Signup / Signin form style 
  - [ ] Edit Form 
  - [ ] Refactor console.log with jsLogger
  - [ ] Save and recover redux store from localStorage
  - [ ] Add hover mouse pointer for all links 
  - [ ] Form Edit - Audrey 
  - [ ] MyProfile Display (beautify view) - Joe
  - [ ] MyInquiries Display (beautify view)
  - [ ] Intl Messages
  - [ ] Optimize HomePage background (video/gif) loading
  - [ ] Data Faker 
  
  - [ ] Add user link to trips
  - [ ] Enhance AlertComponent with reset 
  
  - Fixes 
    - [X] Add destination name to home page popular destinations  
    - [X] Review display after submit 
    - [X] Add isAdmin to user 
    - [ ] Update NavWidget display based on user state 
    - [ ] NestedObject not updating (dashboard -> PostedTrips)
    - [ ] SearchBoxWidget and History (state change is not smooth)
    - [ ] Add trip link to review
    - [ ] disable review when trippian is at his own page 
  - Perf
    - [ ] Unify Alert display
    - [ ] Update appConfig 
    - [ ] Add Inquiry success route 
    - [ ] Add links to login/logout success page, CommonLinksWidget  
    - [ ] Add loading state 
    - [ ] Update error handling in fetch 
    - [ ] Improve state transition, animation ??
  
  - Refactor 
    - [ ] Handle error / alert 
    - [ ] Action Creator 
    - [ ] Reducer (todo later)

  - Data 
    - [ ] Add real destination photo 
  
  - [X] Create Trip
  - [X] Add trip detail page 
  - [ ] Add popular Trippians to destination ????? 
  - [ ] LoadingWidget 
  - [ ] React Animation ???? 
  - [ ] User Dashboard 
  - [ ] Add Map Location  
  - [ ] Destination Edit 
  - [ ] Fix Search URL transition 
  
  - Inquiry 
    - [ ] Hide form and show data upon submission 
  - [ ] File Uploads
  - [ ] Save trips, close trips, review trips (link)
  - [ ] Update data (Redux form prefill)
    - [ ] Destination 
    - [ ] Trippian  
  - [ ] Login with Facebook 
  - [ ] Login with Google
  - [ ] Search and Search Result page 
  - [ ] User 
    - [ ] InquiryList 
    - [ ] User Profile 
    - [ ] Logout  
  - [ ] Vote 
  - Widgets & Misc.
    - [X] Rating 
    - [ ] Carousal 
    - [ ]
  - [ ] SearchBox (auto suggest)
  - [ ] S3 image upload 
  - [ ] Rich Text Editing for Trippian 
  - [ ] Inline Editing 
    - [ ] Profile 
    - [ ] Destination 
  - [ ] Album for Destination 
  - [ ] Album for Trip  
  - [ ] Background photos for all pages 
  - [ ] Edit front-end text 
  - [ ] Extract front-end page text 
  - [ ] Press Page 
  - [ ] Add popular trips to home page 
  - [ ] TripsListPage 
  - [ ] TripsListDetailPage
  - [ ] Contact (Inquiry) Page 
  - [ ] PopularTrippians at Destination
  - [ ] Update access control  
  - [ ] Save (heart) destinations / trips 
  - [ ] Map Search (add position first)
  
  - Clean up 
    - [ ] Clean field default data 
    - [ ] Clean documentation

- https://medium.com/@kevinwu/client-side-file-upload-to-s3-using-axios-c9363ec7b530#.ui789fbh4
- https://github.com/odysseyscience/react-s3-uploader
- https://github.com/okonet/react-dropzone

- https://github.com/tgecho/react-prosemirror  (inline editing, support image)
- https://github.com/jstejada/react-typist


### Important Info and Notice 
- Info 
  - [Project Backlog](https://docs.google.com/a/audreyli.me/spreadsheets/d/1RCjlMw6CdOXqG81kkGs-ssQaS_IszVXLI0p_6t_q6OE/edit?usp=sharing)
  - Project Scopes for commit messages: 
    
    when in doubt, add the file name or the feature, or consult with team. A few scopes to choose: 
    - UI: static mockups, style changes, html changes 
    - **Server**: any server side changes (can be more specic, such as DB, ServerRoutes, testing...)
    - **Client**: any client side changes (can be more specific, such as ClientRoutes, testing... )
    - **package.json**: if you are not sure, just put the name here, so it's clear 
    - **Client(routes.js)**: as routes can be at server and client, it's good to prefix with the scope here 
    - **Server(app.spec.js)**:...

  - Quick Ref on commiting messages:
    - feat: A new feature
    - fix: A bug fix
    - docs: Documentation only changes
    - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - refactor: A code change that neither fixes a bug nor adds a feature
    - perf: A code change that improves performance
    - test: Adding missing tests
    - chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

- Project Overview
  * routes  (paging will be added to most routes, try to group similar routes (only different in params) into one)
    * MMVP 
      - `/destinations?cat=popular`                   -> [], GET, a list of popular destinations 
      - `/destinations/:id`                           -> {}, GET,POST,PUT, a destination info object 
   
      - `/trippians?cat=popular`                      -> [], GET, a list of popular trippians
      - `/trippians?cat=popular&destinationId=123`    -> [], GET, a list of popular trippians in the target desination 
      - `/trippians?destinationId=123`                -> [], GET, a list of all trippians in the target desination 
      - `/trippians/:id`                              -> {}, GET,POST,PUT, a trippian's info object
   
      - `/inquiries/:id`                              -> {}, GET,POST,PUT, an inquiry's info object
      - `/reviews/:id`                                -> {}, GET,POST,PUT, an review's info object
   

    * MVP 
      - `/inquiries?userid=123&is-trippian=true`       -> [] a list of all inquiries under a trippian or trippee, if user is admin, we'll give full access to all inquiries 
      - `/reviews?userid=123&is-trippian=true`         -> [] a list of reviews for a trippian if is-trippian is true, else, we'll return a list of reviews written by the trippee. if user is admin, we'll give full access to all reviews 
      - 

    * NiceToHaves 
      - 


### Milestone 

### Ongoing Topics 
  * Dockr? 
  * EC2, S3 deployment
  * Automatic deployment 

### Meeting Memo 



### W2D1 - Monday January 25 2016
- **Prepare**
  * Feature List Review 
  * Focus this week 
    - Connect features on both front-end and back-end 
    - Enrich the data
    - Build and enhance features 
  * Feature Planning (Inquiry, Voting and Review, Auth, Trips, Chats)
  * Today 
    - General 
      * Data faker (can be either on client side or server side)
      * Github Issues
      * Build the product backlog (Audrey)
    - Server 
      * Inquiry Post 
      * CURL Request List 
    - Client 
      * Pages(Intl): About, Press, Join Us
      * Redux Refactor (map dispatch to action)
      * Redux Demo on extracting form data 
      * Use Bootstrap React 


#### W1D4 - Friday January 15 2016
- **Prepare** 
  * Mini-sprint: static front-end mockup (will add build process first), project milestones
  * Learn: basic react, testing, git flow and deployment (CI) integrated with testing
  * Explore: 
  * Discuss: git flow, tasks for project tracking, project scopes (for commit msg)

- **Morning Planning** - 10:00am
  * Tasks 
    - Manage issues and track tasks  -> Yale 
    - Create sample json data for each route - Elliot (main) & Audrey (alignment later)
    - Setup building process UI Design - Audrey 
    - Talk about React architecture (~5pm) -> Audrey 
    - Folder Structure (~7pm) - Group discussion -> Audrey 
    - Static html mockup for HomePage, DestinationsPage, TrippianProfilePage, InquiryPage -> Joe (assign one, and mark the rest as 'up for grab')
    - Create overall tasks and group related tasks into milestones in github issues - Yale 
    - S3 setup -> Elliot
    - Setup basic server with Test -> Elliot

- **Middle Day Progress Review(Audrey's Coding Session)** - 3pm 
  * react (route, link, higher order component)
  * react testing 

- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 

#### W1D3 - Thursday January 14 2016
- **Prepare** 
  * Mini-sprint: MMVP, wireframe, database design 
  * Explore: Dockr 
  * Discuss: wiki update, git-issue management, open-source, coding standard, change log (with semantic versioning...), node-restful

- **Morning Planning** - 10:00am
  * Tasks 
    - wireframe (trippian profile page, inquiry page, landing page, destination page)
    - database design (group, and Elliot on documenting)
    - setup planning folder (Audrey)
    - setup wiki submodule (Elliot)


- **Middle Day Progress Review (Audrey's Coding Session)** - 3pm 
  * Intro for open source project, commitizen, semantic versioning, testing, Travis CI
  * react hot loading
  
- **Demo Time** (skip due to time limit) - 5pm

- **Daily Review** - 7:55pm 


### Achieved or Future Planning 



#### W1 - Saturday January 17 2016
- **Prepare** 
  * Mini-sprint: static front-end mockup (will add build process first)
  * Learn: basic testing, git flow and deployment (CI) integrated with testing
  * Explore: 
  * Discuss: project management platform, scrumb master tasks for project tracking 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 


#### W2 - Monday January 19 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: divide the project into small tasks (as many as possible, cover all), finalize the development workflow

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 

#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 

#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 

#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 

#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 


#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 


#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 


#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 


#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 


#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 


#### W2 - Tuesday January 20 2016
- **Prepare** 
  * Mini-sprint: 
  * Learn: 
  * Explore: 
  * Discuss: 

- **Morning Planning** - 10:00am



- **Middle Day Progress Review** - 3pm 


- **Demo Time** - 5pm


- **Daily Review** - 7:55pm 
