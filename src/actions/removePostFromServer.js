var request = require('superagent');
var utils_get_rethink_server_ngrok = require('../utils/rethink-server-ngrok.js');

let removePostFromServer = function (input, state, output) {

	let post = state.get('posts', input.ref);

	request
		.post(utils_get_rethink_server_ngrok() + '/post/delete')
		.send({
			id: post.id
		})
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(err) {
				throw err;
			}
			output.success({
				server_response: res.text
			});
		});

};

export default removePostFromServer;
