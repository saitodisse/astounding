var request = require('superagent');
var utils_get_rethink_server_ngrok = require('../utils/rethink-server-ngrok.js');

let savePost = function (input, state, output) {

	let post = state.get('posts', input.ref);

	request
		.put(utils_get_rethink_server_ngrok() + '/post/new')
		.send({
			title: post.title
		})
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(err) {
				throw err;
			}
			var json_response = JSON.parse(res.text);
			output.success(json_response);
		});

};

export default savePost;
