API Endpoints

Endpoint: /api/profile

Verb: GET
Route: /api/profile
Data:
Will have Object "my_profile" that contains name, github_link, github_profile_image,
current_city, and family_members

Responds with "my_profile" in JSON format


Endpoint: /api/videogames

Verb:GET
Route:/api/videogames
Data:
Returns all videogame data as in JSON format

Verb: Post
Data:
Adds a videogame to the videogame array and gives it an id.

Endpoint: /api/videogames/:id

Verb: GET
Route: /api/videogames/:id
Data:
Returns one videogame data in JSON format

Verb: PUT
Data:
Updates a videogame at the id it is pointing to

Verb: DELETE
Data:
Trashes a videogame at the id it is poitning to