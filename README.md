# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab 😎

Your goal is to build a API about yourself. Your API will incorporate:
* some basic details about you
* `/api` endpoints that return JSON
* RESTful Routing (GET, POST, UPDATE, DELETE)
* CRUDing (of at least one resource)

Please fork & clone this repo to get started.

## Part 0. This is where I'll be adding my own information

Here's a list of what I did!

    JSON API Endpoint           Response JSON
    =============               =============
    GET /api/profile		{
								name: "Joe Roers",
								github_link: "https://github.com/jroers/",
								github_profile_image: "https://avatars0.githubusercontent.com/u/15789101?v=3&s=460",
								current_city: "Berkeley, CA",
								family_members: [{
    										name: "Susan",
                      					relation: "Mother"
				                    }, { 
				                    	name: "Jeff",
				                      	relation: "Father"
				                    }, { 
				                    	name: "Andrew",
				                      	relation: "Brother"
				                    }, {
				                    	name: "Tom",
				                      	relation: "Brother"
				                    }, {
				                    	name: "Danny",
				                      	relation: "Brother"
				                    }, {
				                    	name: "Ben",
				                      	relation: "Brother"
				                    }]
		                    }

    GET /api/shows      	[
                                 {
										_id: 1,
										name: 'Sense8',
										creator: 'J. Michael Straczynski',
										series_status: 'season break',
										marathon_status: 'up to date'
                                 },
                                 { 
										_id: 2,
										name: 'Criminal Minds',
										creator: 'Jeff Davis',
										series_status: 'ongoing',
										marathon_status: 'behind'
                                 },
                                 {
										_id: 3,
										name: "30 Rock",
										creator: "Tina Fey",
										series_status: "ended",
										marathon_status: "up to date"
                             	   },
                             	   {
										_id: 4,
										name: "How to Get Away With Murder",
										creator: "Shonda Rhimes",
										series_status: "season break",
										marathon_status: "up to date"
                         	   	   }
                            ]
    POST /api/shows			 [
                                 {
										_id: 1,
										name: 'Sense8',
										creator: 'J. Michael Straczynski',
										series_status: 'season break',
										marathon_status: 'up to date'
                                 },
                                 { 
										_id: 2,
										name: 'Criminal Minds',
										creator: 'Jeff Davis',
										series_status: 'ongoing',
										marathon_status: 'behind'
                                 },
                                 {
										_id: 3,
										name: "30 Rock",
										creator: "Tina Fey",
										series_status: "ended",
										marathon_status: "up to date"
                             	   },
                             	   {
										_id: 4,
										name: "How to Get Away With Murder",
										creator: "Shonda Rhimes",
										series_status: "season break",
										marathon_status: "up to date"
                         	   	   },
                         	   	   {
                         	   	   _id: 5,
                         	   	   name: "Unbreakable Kimmy Schmidt",
                         	   	   creator: "Tina Fey",
                         	   	   series_status: "season break",
                         	   	   marathon_status: "up to date"
                            ]
    
    FUTURE GOALS
    
    GET /api/shows?limit=1   [ { _id: 1, name:'Sense8', creator: ... } ]

    GET /api/shows?series_status=season+break
                                [ { _id: 1, name:'Sense 8' ... },
                                  { _id: 4, name: 'How to Get Away With Murder ...} ]                                
    
    GET /api/shows/2         { _id: 2, name:'Criminal...' }

    PUT /api/shows/2         etc
    DELETE /api/shows/2      etc



##File Structure of this API

_A good express file tree structure_:

```
├── server.js
├── package.json
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
