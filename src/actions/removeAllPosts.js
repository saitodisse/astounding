let removeAllPosts = function(input, state) {
	state.set('posts', {});
  state.set('nextRef', 0);
};

export default removeAllPosts;
