let setCurrentPost = function(input, state) {
  var post = state.get(['posts', input.ref]);
  state.set('newPostText', post.text);
};

export default setCurrentPost;
