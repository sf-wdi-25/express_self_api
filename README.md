# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab 😎

Your goal is to build a API about yourself. Your API will incorporate:
* some basic details about you
* `/api` endpoints that return JSON
* RESTful Routing (GET, POST, UPDATE, DELETE)
* CRUDing (of at least one resource)

Please fork & clone this repo to get started.

## Part 0. This is where I'll be adding my own information

Here's a list of what I did!

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



##File Structure of this API

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
