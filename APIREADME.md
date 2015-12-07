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
    + `designProjects resource`  _*CRUD*_ using _*RESTful Routes*_
        + Endpoints for `index`, `show`, `create` `update`, `delete`.

## Part 2. Personal Dashboard

#### Minimum Requirements
Consume the Personal API you just created, and use it to build your own personal dashboard.

* Create an `index.html` **homepage** that's linked to your main javascript and css files.
* Use **jQuery** and **AJAX** to consume your Personal API.
* Display **at least one image/gif** that you retrieved from your Personal API.
* Create **at least one form**, so you can CRUD at least one of your resources.
* **Make your momma proud**.