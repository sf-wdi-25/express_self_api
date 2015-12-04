# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab

Your goal is to build a API about yourself. Your API will incorporate:
* some basic details about you
* `/api` endpoints that return JSON
* RESTful Routing (GET, POST, UPDATE, DELETE)
* CRUDing (of at least one resource)

## Part 1. Personal API

#### Minimum Requirements

- **Documentation**: You must create a readme file that specifies what endpoints are available on your API, what your endpoints expect from the request (verb + route + data), and what they will respond with (structure of JSON). _We highly recommend that you do this first_!
- A **contact endpoint** (`/api/YOUR-GITHUB-USERNAME/contact`) that responds with:
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
* Contact info stretch goals
    * Add a `days_old` field that calculates how many days old you are.
    * Add an `is_awake` field that's only `true` between 8am and 10pm!
    * Add an `is_hungry` field that's only `true` around lunch and dinner!
* CRUD resource stretch goals
    * Use query parameters to filter results from one of your CRUD endpoints:
        - e.g. `?limit=2` only return two results
    * Create a `/search` endpoint
        - e.g. `?q=mad+men` only returns tv shows with that in the title
        - e.g. `?type=romance` only returns romance novels

## Examples 
An example for a 'Jon Snow' might have endpoints like:

<details><summary>Caution, spoiler alert! (click here)</summary>
```
├──  /api/jsnow/family     // [ { name: 'Arya Stark', relationship: 'sister' }, { name: 'Bran Stark', relationship: 'brother' }]
│          └── /family?relationship=sister    // [ {name: 'Arya Stark', relationship: 'sister' }, { name: 'Sansa Stark', relationship: 'sister' }
├──  /api/jsnow/hobbies    // [ { name: 'fighting', tools: ['sword', 'bow'] }, { name: 'riding', tools: ['horse'] } ]
│                └── /1    // riding
├──  /api/jsnow/projects   // [ { name: 'defeating the wildlings', opponents: [ 'Mance Rayder', 'Lord of Bones'] }, { name: 'saving the wildlings', opponents: ['the Night Watch', 'the Others'] } ]
│                └── /1    // { name: 'defeating the wildlings', opponents: [ 'Mance Rayder', 'Lord of Bones'] }

```
</details>

An example for a student might have endpoints like:

```
├──  /api/jstudent/favorites  // [ {}, ... ]
│             ├── /favorites?limit=2          // [ { type: 'beverage', name: 'Philharmonic' maker: 'Philz Coffee', subtype: 'coffee' },
│             │                                    { type: 'game', name: 'Exploding Kittens' }]
│             └── /favorites/beverages    // [ { type: 'beverage', name: 'Philharmonic' maker: 'Philz Coffee', subtype: 'coffee' },
│                                              { type: 'beverage', name: 'Breakfast Stout', subtype: 'beer', maker: 'Founders Brewing' } ]
├──  /api/jstudent/projects  // index route, return all projects
│             ├── /projects?limit=2          // [ { name: 'tictactoe', js: true, ruby: false, css: true, theme: 'Star Wars', description .... },
│             │                                    { name: 'racing game 1', js: true, ruby: false, css: true, theme: 'Mario Bros', desc..... }]
│             └── /projects/3                // { name: 'tictactoe', js: true, ruby: false, css: true, theme: 'Star Wars', description .... }
├──  /api/jstudent/is_awake   // true if between 8AM-12AM
├──  /api/jstudent/is_hungry  // true if between 11AM-12PM or 5PM-6PM
├──  /api/jstudent/wardrobe   // all wardrobe items  [ {color: 'dark blue', type: 'pants', ...}, {}, ...]
│             └── /wardrobe/3                // { color: 'dark blue', type: 'pants', brand: 'Levis' },
├──  /api/jstudent/commute_times   //
│             ├── /commute_times/20151203    // [ { am: 20, method: 'BART' }, {pm: 40, method: 'BART', delay: true} ]
│             └── /commute_times/20151204    // [ { am: 40, method: 'MUNI' } ]
```
</details>

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
