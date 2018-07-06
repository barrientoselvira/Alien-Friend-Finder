var yourFriends = require("../data/friends.js");

var path = require("path");


// ROUTING
// ===============================================================================

module.exports = function(app) {
app.get("./api/friends", function(req, res){
   res.json(yourFriends);
});

// app.post("./api/friends", function(req, res){
//        var userFriendOptions = req.body;

//        var userWants = userFriendOptions.scores;
     

    
//    });

};