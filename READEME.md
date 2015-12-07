README.md
Welcome to the documentation of the express_self_api. The express_self_api wil be referred to as esa for the remainder of the document. The esa has a number capabilities and sections. 

The endpoints included in the esa are as follows:

api/profile
api/travel
api/skills

The information or data that these endpoints contain are as follows:

api/profile has basic information about myself including my name, my github link, the current city that I live in, and a list of my family members.

api/travel has information about places in the world that I want to visit. The data contains a destination, followed by reasons I would like to visit said destination. 

api/skills has information about skills that I would like to attain in the future.

api/profile will take 'GET' request through the api/profile route and will return an object, that contains one array under the key family_members.

api/travel will take 'GET' request through the api/travel route and will return an object containg an array with five objects containing two keys, destination and Reasons I want to go.

api/skills will respond to a 'GET' request through the route api/skills and will return an object containing an array with the key, skills.
