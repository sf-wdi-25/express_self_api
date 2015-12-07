///The Breon API///

<!-- URL to access my API -->
Base URL: https://murmuring-waters-9411.herokuapp.com/API/


Method          Endpoint            Usage               Returns
Get             /api/profile        Get all my personal personal info
                                    information                         
GET				/api/animes			Get		list of all anime

POST			/api/animes			post animes that you are currently watching or planning to

GET				/api/animes/:id		get the id of the anime you posted

PUT				/api/animes/:id		update your anime listings

DELETE			/api/animes/:id		Delete anime from the database and out of the dom
