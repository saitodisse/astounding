// Import express and co
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Load config for RethinkDB and express
var config = require(path.join(__dirname, '/config.js'));

// Import rethinkdbdash
var thinky = require('thinky')(config.rethinkdb);
var r = thinky.r;
var type = thinky.type;

// Create the model
var Post = thinky.createModel('posts', {
  id: type.string(),
  title: type.string(),
  createdAt: type.date().default(r.now())
});

// Ensure that an index createdAt exists
Post.ensureIndex('createdAt');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}

// app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser());
app.use(allowCrossDomain);

app.route('/post/get').get(get);
app.route('/post/new').put(create);
app.route('/post/update').post(update);
app.route('/post/delete').post(del);

function handleError(res) {
  return function(error) {
    return res.send(500, {error: error.message});
  };
}

// Retrieve all posts
function get(req, res, next) {
  Post.orderBy({index: 'createdAt'}).run().then(function(result) {

    setTimeout(function() {
      res.send(JSON.stringify(result));
    }, config.express.simulate_delay);

  }).error(handleError(res));
}

// Create a new post
function create(req, res, next) {
  var post = new Post(req.body);
  post.save().then(function(result) {

    setTimeout(function() {
      res.send(JSON.stringify(result));
    }, config.express.simulate_delay);

  }).error(handleError(res));
}

// Update a post
function update(req, res, next) {
  var post = new Post(req.body);
  Post.get(post.id).update({
   title: req.body.title
  }).run().then(function(post_response) {

    setTimeout(function() {
      res.send(JSON.stringify(post_response));
    }, config.express.simulate_delay);

  }).error(handleError(res));

  // Another way to delete a post is with
  // Post.get(req.body.id).update(post).execute()
}

// Delete a post
function del(req, res, next) {
  Post.get(req.body.id).run().then(function(post) {
    post.delete().then(function(result) {

      setTimeout(function() {
        res.send(req.body.id + ' was deleted');
      }, config.express.simulate_delay);

    }).error(handleError(res));
  }).error(handleError(res));

  // Another way to delete a post is with
  // Post.get(req.body.id).delete().execute()
}

// Start express
app.listen(config.express.port, '0.0.0.0');
console.log('listening on 0.0.0.0:' + config.express.port);
