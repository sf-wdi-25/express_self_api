# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab

Your goal is to build a API about yourself. Your API will incorporate:
* some basic details about you
* `/api` endpoints that return JSON
* RESTful Routing (GET, POST, UPDATE, DELETE)
* CRUDing (of at least one resource)

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

- **Documentation**: You must create a README.md file that specifies what endpoints are available on your API, what your endpoints expect from the request (verb + route + data), and what they will respond with (structure of JSON). We really want to know how to use your API! And we _highly recommend that you do this first_!
- A **profile endpoint** (`/api/profile`) that responds with:
    + `name` - a string
    + `github_link` - a url to your github profile
    + `github_profile_image` - the url of your github profile image
    + `current_city`
    + `family_members` - an array of family member objects
        + e.g. `[{name: "foo", relationship: "father"}, {name: "bar", relationship: "mother"}]`
- **At least one resource** that you can _*CRUD*_ using _*RESTful Routes*_
    - That means endpoints for `index`, `show`, `create` `update`, `delete`!
    - Here are some ideas:
        * Wish list (e.g. `gifts` or `wishes`)
            - _id, description, price, amazon_link
        * `books` you've read
            - _id, title, author, genre, notes
        * `quotes` you like, or `tweets`
            - _id, text, date, author
        * `movies` or `shows` you like
            - _id, title, season, director
        * `projects` or `poems`
            - _id, title, body, date

All API Endpoints must return JSON.

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
                                  family_members: [ { name: 'Arya Stark', relationship: 'sister' }, { name: 'Bran Stark', relationship: 'brother' }]
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


## Part 2. Personal Dashboard

#### Minimum Requirements
Consume the Personal API you just created, and use it to build your own personal dashboard.

* Create an `index.html` **homepage** that's linked to your main javascript and css files.
* Use **jQuery** and **AJAX** to consume your Personal API.
* Display **at least one image/gif** that you retrieved from your Personal API.
* Create **at least one form**, so you can CRUD at least one of your resources.
* **Make your momma proud**.


## Part 3. Go Crazy Stretch Goals
* What's the `current_weather` like in your `current_city`? Use this [Weather API](https://developer.forecast.io/). You can decide whether you want to do a front-end (client-side) integration, or a back-end (server-side) integration with the API.
* Add a `most_recent_tweet` or a `most_recent_instagram` field and consume the [Twitter API] or the [Instagram API] _on the server side_ (hint, you'll need to use the [Request library](https://github.com/request/request)).
* Embed your favorite youtube videos or soundcloud/spotify tracks.

##Recommended File Structure

_A good express file tree structure_:

```
├── server.js  // your server code
├── package.json    // lists dependencies; changed by npm install --save somePackage
├── public  // i.e. client-side
│   ├── images  // images to serve to client
│   ├── javascripts
│   │   └── app.js   // client-side javascript file
│   └── stylesheets
│       └── style.css
├── vendor // includes jQuery & bootstrap if we choose not to use CDN
├── views  // html files that we'll serve
│   ├── index.html
```
