# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Express Practice

# Build an API in Express

We're going to build an API about ourselves.  Ideally, your API should be RESTful and support proper CRUD operations.
We'll be using hard-coded data, which you'll be adding yourself.  


## Self-API

The API we're building is about _you_.  You're API will make things about yourself available to anyone who makes the appropriate API call (whether that be in a browser, AJAX or Postman).

An example for a 'Jon Snow' might have endpoints like:

<details><summary>Caution, spoiler alert!</summary>
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
├──  /api/jstudent/favorites  // [ all favorites? ]
│             ├── /favorites?limit=2          // [ { type: 'beverage', name: 'Philharmonic' maker: 'Philz Coffee', subtype: 'coffee' },
│             │                                    { type: 'game', name: 'Exploding Kittens' }]
│             └── /favorites/beverages    // [ { type: 'beverage', name: 'Philharmonic' maker: 'Philz Coffee', subtype: 'coffee' },
│                                              { type: 'beverage', name: 'Breakfast Stout', subtype: 'beer', maker: 'Founders Brewing' } ]
├──  /api/jstudent/projects  // index route, return all projects
│             ├── /projects?limit=2          // [ { name: 'tictactoe', js: true, ruby: false, css: true, theme: 'Star Wars', description .... },
│             │                                    { name: 'racing game 1', js: true, ruby: false, css: true, theme: 'Mario Bros', desc..... }]
│             ├── /projects/3                // { name: 'tictactoe', js: true, ruby: false, css: true, theme: 'Star Wars', description .... }
├──  /api/jstudent/is_awake   // true if between 8AM-12AM
├──  /api/jstudent/is_hungry  // true if between 11AM-12PM or 5PM-6PM
├──  /api/jstudent/wardrobe   // all wardrobe items  [ {color: 'dark blue', type: 'pants', ...}, {}, ...]
│             ├── /wardrobe/3                // { color: 'dark blue', type: 'pants', brand: 'Levis' },
├──  /api/jstudent/commute_times   //
│             ├── /commute_times/20151203    // [ { am: 20, method: 'BART' }, {pm: 40, method: 'BART', delay: true} ]
│             └── /commute_times/20151204    // [ { am: 40, method: 'MUNI' } ]
```

## Requirements

Get creative!  You can add hobbies, favorite books (or comics or tv shows or wines), personality or physical attributes, almost anything you can think of.

* You can use your **github user name** as the route.  E.g. if my github account is `jsnow`, use `localhost:3000/api/jsnow`
* Implement **GET**, **POST**, **DELETE**, and **PUT** routes.
  * Think about CRUD.

### GET

* Your API should support GET on all(?) routes.
 * index routes like `GET /api/jstudent/wardrobe` should return an array of wardrobe objects.
 * individual resources like `GET /api/jstudent/wardrobe` should return a single wardrobe object.
   * Note: it's very reasonable for an object to contain an array of other objects.  `{brand: 'Zara', colors: ['blue', 'grey']}`

### POST

* Your API should implement POST to create new items and add them to the collection.
  * `POST /api/jsnow/swords` with a body `{name: 'Long Claw', material: 'Valyrian Steel'}` should add a new sword to the array of swords.
  * If a user ran the above and then ran `GET /api/jsnow/swords` they should expect to see the new sword in the output.

### DELETE

* Add Delete functionality.
  * Delete should remove the item from the collection.
    * Ex: `DELETE /api/json/family/1`  would remove Arya from the family Array.

### PUT

* Add Update functionality.
  * Update should change the named resource.  
    * Ex: PUT /api/json/family/1 with body `{ name: 'Arya Stark', relationship: 'half-sister' }` should change that particular object, not add a new one.
  * You can't do PUT on an array, only on a specific item.

### More

* Use both types of parameters
  * query params   `/search?q=Kittens`
  * URL or route params: `/projects/:id`  
  * _CHALLENGE_: use both on a single route!
* Try to always return an object or array of objects.  (On API routes.)
  * Avoid returning a simple string most of the time.  Eg: use `{ name: 'Sansa Stark' }` rather than `'Sansa Stark'`
* Serve static (public) assets.
* Serve the `index.html` page at the _your-name_ route.  E.g.: `localhost:3000/jstudent` should show jstudent's info.
  * Use jQuery to get *some* of your data on the page.  You don't have to display it all.



**File Structure**

_A good express file tree structure_:

```
├── server.js  // your server code
├── package.json    // lists dependencies; changed by npm install --save somePackage
├── public  // i.e. client-side
│   ├── images  // images to serve to client
│   ├── javascripts
│       └── app.js   // client-side javascript file
│   └── stylesheets
│       └── style.css
├── vendor // includes jQuery & bootstrap if we choose not to use CDN
├── views  // html files that we'll serve
│   ├── index.html
```
