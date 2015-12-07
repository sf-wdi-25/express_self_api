
- **Documentation**: You must create a README.md file that specifies what endpoints are available on your API, what your endpoints expect from the request (verb + route + data), and what they will respond with (structure of JSON). We really want to know how to use your API! And we _highly recommend that you do this first_!

Enpoints avaliable

-  /api/personalProfile", description: "Provides personal data about me"

    This endpoint expects nothing, it is not CRUDed.

    The data lives in the personalProfile array.

- "/api/books", description: "Books we should all read!"

    This endpoint expects to be created, read, updated and destroyed; however, the update does not work and I really have no idea why. Also, after something is added it does not seem to stay in the database for long. If any change to the page is made then the new objects melt away.

    To use the API place new data in the new books fields. To delete existing ones, hit the trashcan icon. To theoretically update, hit the pencil icon, enter your updated info and watch your info turn back into the original information!!

    The data lives in the books array.

    I think I'm missing the point of this README file.

# espress_self_api
