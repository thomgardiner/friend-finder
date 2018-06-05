let friends = require("../data/friends.js");
let questions = require("../data/questions.js");

module.exports = function(app){

app.get('/api/questions', function(req, res) {
    return res.json(questions);
  });

app.get('/api/friends', function(req, res) {
    return res.json(friends);
  });

app.post('/api/friends', function(req, res){
  friends.push(req.body);
  console.log("Hey! I did something!");
});
}

