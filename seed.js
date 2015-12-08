var db = require("./models");

//  db.Movies.create(
//    {name: "The Matrix"}, function (err, movie) {
//     if (err) {console.log("Error")};
//     console.log(movie);
// });

//   db.Movies.create(
//    {name: "The Matrix Reloaded"}, function (err, movie) {
//     if (err) {console.log("Error")};
//     console.log(movie);
// });

//    db.Movies.create(
//    {name: "The Matrix Revlution"}, function (err, movie) {
//     if (err) {console.log("Error")};
//     console.log(movie);
// });

//     db.Movies.create(
//    {name: "Napoleon Dynamite"}, function (err, movie) {
//     if (err) {console.log("Error")};
//     console.log(movie);
// });
// //
//
//  db.Characters.create(
//    {name: "Arya Stark", actor_name: "Maisey Williams", show_title: "Game of Thrones"}, function (err, snow) {
//     if (err) {console.log("Error")};
//     console.log(snow);
// });

// db.Shows.create(
//   {
//     name: "Game of Thrones",
//     network: "HBO"
//   }, function(err, success) {
//          if (err) {return console.log("Error")};
//          console.log(success);
//   }
//
// );

// db.Characters.find({}, function(err, success) {
//   if (err) {console.log("Error")};
//   success.forEach(function (entry) {
//     console.log('------------------------------------\n' , entry);
//   });
// });

// db.Shows.find({}, function(err, success) {
//   if (err) {console.log("Error")};
//   success.forEach(function (entry) {
//     console.log('------------------------------------\n' , entry);
//   });
// });

// db.Shows.findOne({name: "Game of Thrones"}, function (err, show) {
//   if(err){return console.log("ERR");}
//   show.characters.push({name: "The Mountain", actor_name: "Hafthor Bjornsonn"});

//     show.save(function (err, success) {
//      if(err){return console.log("ERR");}
//      //console.log(success);
//      console.log(show);
//    });
//  });

db.Movies.findById( '566635f974657692698929c3', function(err, success) {
  if (err) {console.log("Error")};
    console.log(success);

});

// db.Characters.findOneAndUpdate({name: "Arya Stark"}, {name: "Faceless One"}, function(err, success) {
//    if (err) {console.log("Error")};
//    console.log(success);
//    console.log("Successfully updated entry");
// })

// db.Characters.findOneAndRemove({name: "Arya Stark"}, function(err, success) {
//    if (err) {console.log("Error")};
//    console.log(success);
//    console.log("Successfully removed character");
// });

// db.Movies.remove({}, function(err, success) {
//   if (err) { return console.log("Error", err)};
//   console.log("Removed all Movies");
// });
//Status API Training Shop Blog About Pricing
