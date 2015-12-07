#  Personal API - Weekend Lab

My API incorporates:
* some basic details about me
* `/api` endpoints that return JSON
* RESTful Routing (GET, POST, UPDATE, DELETE)
* CRUDing (of at least one resource)


## API Endpoints
The list below specifies what endpoints are available on my API.

#### (`/api/profile`)
- **(`/api/profile`)**: expects to get my personal information from the request, and will respond with value of the desired property. To use this API, see the documentation below. Here's what RESTful routing looks like for `profile`:

    | HTTP Method | URL | Example | a.k.a. |
    | :--- | :--- | :--- | :--- |
    | `GET` | `/profile` | _read_ all the profile properties | display list |
    | `POST` | `/profile` | _create_ a new profile property | new property |
    | `GET` | `/profile/:id` | _read_ profile property #3 | show property |
    | `PUT` | `/profile/:id` | _update_ property #1 | edit property |
    | `DELETE` | `/profile/:id` | _destroy_ property #3 | destroy property |
   
    + `firstname` - string
    + `lastname` - string
    + `github_link` - url to your github profile
    + `github_profile_image` - url of github profile image
    + `current_city` - string
    + `family_members` - value is an array
    + `Design Projects resource` that you can _*CRUD*_ using _*RESTful Routes*_
        + Endpoints for `index`, `show`, `create` `update`, `delete`.
            *  _id, title, description, images, date

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
