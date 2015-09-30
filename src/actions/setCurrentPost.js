let setCurrentPost = function(input, state) {
  var post = state.get(['posts', input.ref]);
  state.set('newPostText', post.text);
  /**/console.log('\n>>---------\n post:\n', post, '\n>>---------\n');/*-debug-*/
};

export default setCurrentPost;
