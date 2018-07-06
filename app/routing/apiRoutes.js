var yourFriends = require("../api/friends.js");

var path = required("path");

// ROUTING
// ===============================================================================

module.exports = function(app) {
app.get("../api/friends", function(req, res){
    res.json(yourFriends);
});

app.post("../api/friends", function(req, res){
        var userFriendOptions = req.body;

        var userWants = userFriendOptions.scores;
        // if(friendsData.length < 1){
        //     data.push(req.body);
        //     res.json(true);
        // }
        // else {
        //     res.json(false);
        // }

        var userName = "";
        var userPicture = "";
        var 
    });

};
