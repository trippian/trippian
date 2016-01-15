##Trippian Project Track 
We created this file to track the whole project, including important info, notices, daily meeting memos and any other project related materials that we share. 

After our daily meeting, we'll move the tasks under meeting memo to Github issues so that we can better track our progress.

### Important Info and Notice 

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


### Ongoing Topics 
  * Dockr? 
  * EC2, S3 deployment

### Meeting Memo 



#### W1D4 - Friday January 15 2016
- **Prepare** 
  * Mini-sprint: static front-end mockup (will add build process first)
  * Learn: basic testing, git flow and deployment (CI) integrated with testing
  * Explore: 
  * Discuss: git flow, project management platform, tasks for project tracking 

- **Morning Planning** - 10:00am
  * Tasks 
    - Setup building process UI Design - Audrey 
    - 
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
