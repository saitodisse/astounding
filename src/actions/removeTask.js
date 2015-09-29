let removePost = function(input, state) {
  state.unset(['posts', input.ref]);
};

export default removePost;
