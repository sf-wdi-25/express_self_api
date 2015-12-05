# Profile endpoint

Verb: GET
Route: /api/profile
Data: My profile info
Structure of JSON response: Keys (e.g. name, github_link) and their respective values

# Movies index endpoint

Verb: GET
Route: /api/movies
Data: My favorite Disney movies
Structure of JSON response: An array of movies with keys (e.g. _id, title) and their respective values

# Movies show endpoint

Verb: GET
Route: /api/movies/:id
Data: Select one of my favorite Disney movies
Structure of JSON response: Selected movie

# Movies create endpoint

Verb: POST
Route: /api/movies
Data: A favorite Disney movie to add
Structure of JSON response: Movie added

# Movies update endpoint

Verb: PUT
Route: /api/movies/:id
Data: Select one of my favorite Disney movies to update
Structure of JSON response: Updated movie

# Movies delete endpoint

Verb: DELETE
Route: /api/movies/:id
Data: Select one of my favorite Disney movies to delete
Structure of JSON response: Deleted movie