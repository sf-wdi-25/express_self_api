Heroku Link:
https://ancient-peak-3033.herokuapp.com/

## Part 1. Personal API


All API Endpoints return JSON.


#### Examples
An example API for 'Jon Snow' might have endpoints like:

    JSON API Endpoint           Response JSON
    =============               =============
    //My Profile Information
    GET /api/profile            {
                                  name: "Colbert Tse",
                                  url: 'localhost:3000',
                                  github_link: "https://github.com/trebloc",
                                  github_profile_image: "https://avatars1.githubusercontent.com/u/6238249?v=3&u=d66fb4b7d60254f849f08c8dee354f0a5b74cc91&s=140",
                                  current_city: "San Francisco",
                                  family_members: [ {                             name: 'Taffany Hwang', relationship: 'Fiańcee' }, { name: 'Ankey Tse', relationship: 'Mother' }, { name: 'Nicole Tse', relationship: 'Sister' } ]
 
                                }

    
    // Object/Array of my Favorite Movies.
    GET /api/favoriteMovies           [
                                 { _id: 1,
                                 title: "Citizen Kane",
                                 genre: "Drama",
                                 director: "Orson Welles",
                                 year: "1941"
                                 },
                                 { _id: 2,
                                 title: "Up",
                                 genre: "Animation",
                                 director: "Peter Docter",
                                  year: "2009"      
                                },
                                { _id: 3,
                                  title: "Back to the Future",
                                  genre: "Adventure",
                                  director: "Robert Zemeckis",
                                  year: "1985"      
                                },
                                { _id: 4,
                                  title: "Indiana Jones: Raiders of the Lost Ark",
                                  genre: "Action",
                                  director: "Steven Spielberg",
                                  year: "1981"      
                                },
                                { _id: 5,
                                  title: "Amélie",
                                  genre: "Drama",
                                  director: "Jean-Pierre Jeunet",
                                  year: "2001"      
                                }
                                ];
    
## Part 2. Personal Dashboard

    GET /
    GET /api/profile
    GET /api/favoriteMovies

    POST /api/favoriteMovies         
    PUT /api/favoriteMovies/:id        
    DELETE /api/favoriteMovies/:id      


## Part 2. Personal Dashboard

* Createed an `index.html` **homepage** that's linked to your main javascript and css files.
* Used **jQuery** and **AJAX** to consume your Personal API.
* Displayed **at least one image/gif** that you retrieved from your Personal API.
* Created **at least one form**, so you can CRUD at least one of your resources.
* **Make your momma proud**.


##My File Structure

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
