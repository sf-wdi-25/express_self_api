# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab

Your goal is to build a API about yourself. Your API will incorporate:
* Well-documented **JSON API** Endpoints
* A full set of **REST-ful Routes** (GET, POST, UPDATE, DELETE)
* At least one **CRUD-able resource** (Create, Read, Update, Destroy)
* and an `/api/profile` endpoint with some basic **details about you**

Please fork & clone this repo to get started.

## Part 0. Deploy to Heroku
Before we start coding, our first goal together is to configure our application so that it can be deployed to Heroku (a web application host).

Follow the instructions here: [Deploying Express Apps to Heroku](https://github.com/sf-wdi-25/notes/blob/master/how-tos/deploy-nodejs-app-to-heroku.md)

As you continue to work on this project, you'll need to remember to push your changes to heroku (just like you would with github!):

```bash
# git add . -A
# git commit -m "detailed description of what I changed"
git push heroku master
heroku open
```

It's common for code to break "in production" (broken links, different environment, missing dependenies...), so do your best to debug!

## Part 1. Personal API
Now that we're deployed, it's time to start coding your "personal" api!

#### Minimum Requirements

- **Documented API Endpoints**
    - You must document your API endpoints. We really want to know *how* to use your API! And for starters, we need to know what endpoints exist!
        +  Don't make us [dictionary attack](https://en.wikipedia.org/wiki/Dictionary_attack) your site with guesses!
    - One cool way to do this is to create an endpoint that describes all the available endpoints(!). We've set you up with an example in `server.js`. Don't forget to update it!
        + See the [Open API Initiative](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#paths-object-example) for a neat example of this.
    - This is also a great way to plan out the features you want to develop. So we _highly recommend that you do this step first_!
- **A Profile Endpoint** (`/api/profile`) that responds with hard-coded data:
    + `name` - a string
    + `github_link` - a url to your github profile
    + `github_profile_image` - the url of your github profile image
    + `current_city`
    + `pets` - an array of your pets
        + e.g. `[{name: "foo", type: "Cat", breed: "Siamese"}, {name: "bar", type: "Dog", breed: "Dalmation"}]`
- **At least one resource (mongoose model)** that you can _*CRUD*_ using _*RESTful Routes*_
    - That means endpoints for `index`, `show`, `create` `update`, `delete`!
    - Here are some ideas:
        * Wish list (e.g. `gifts` or `wishes`)
            - _id, description, price, amazon_link
        * `action_figures` or `toys` you've owned
            - _id, title, maker, genre, condition
        * `destinations` you like, or `vacations`
            - _id, country, date, duration, photo
        * `movies` or `shows` you like
            - _id, title, season, director
        * `portfolio_projects` or `freestyle_rap_lyrics`
            - _id, title, body, date

All API Endpoints must return JSON.

> **Pro-Tip**: One good strategy is to add the database last. Start with your api routes and some hard-coded data. Make sure it's working the way you want before tackling the database layer!

#### API Stretch Goals
* Profile info stretch goals
    * Add a `days_old` field that calculates how many days old you are.
    * Add an `is_awake` field that's only `true` between 8am and 10pm!
    * Add an `is_hungry` field that's only `true` around lunch and dinner!
* CRUD resource stretch goals
    * Use query parameters to filter results from one of your CRUD endpoints:
        - e.g. `?limit=2` only return two results
    * Create a `/search` endpoint
        - e.g. `?q=mad+men` only returns tv shows with that in the title
        - e.g. `?type=romance` only returns romance novels

#### Examples
An example API for 'Jon Snow' might have endpoints like:

    JSON API Endpoint           Response JSON
    =============               =============
    GET /api/profile            {
                                  name: "Jon Snow",
                                  github_link: "http://github.com/u-know-nothing-jon-snow",
                                  current_city: "The Wall",
                                  is_awake: false,
                                  family_members: [ 
                                    { name: 'Arya Stark', relationship: 'sister' }, 
                                    { name: 'Bran Stark', relationship: 'brother' }
                                  ]
                                }

    GET /api/projects           [
                                 {
                                    _id: 2,
                                    name: 'Defeat the wildlings',
                                    type: 'quest',
                                    opponents: [ 'Mance Rayder', 'Lord of Bones'],
                                    status: 'resolved'
                                 },
                                 { 
                                    _id: 3,
                                    name: 'Save the wildlings',
                                    type: 'campaign',
                                    opponents: ['the Night Watch', 'the Others'],
                                    status: 'pending'
                                 }
                                ]
    
    GET /api/projects?limit=1   [ { _id: 2, name:'Defeat...' } ]

    GET /api/projects?status=pending
                                [ { _id: 3, name:'Save...' } ]                                
    GET /api/projects/2         { _id: 2, name:'Defeat...' }

    POST /api/projects          etc
    PUT /api/projects/2         etc
    DELETE /api/projects/2      etc

Make sure to spend time planning this part out!

## Part 2. Personal Dashboard

#### Minimum Requirements
Consume the Personal API you just created, and use it to build your own personal dashboard.

* Create an `index.html` **homepage** that's linked to your main javascript and css files.
* Use **jQuery** and **AJAX** to consume your Personal API.
* Use **Handlebars** Templating to render data to the page.
* Display **at least one image/gif** that you retrieved from your Personal API.
* Create **at least one form**, so you can CRUD at least one of your resources.
* Get rid of that ugly blue background. Style it up! **Make your momma proud**.
