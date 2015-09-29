let setCounters = function(input, state) {
  let posts = state.get('posts');
  state.merge({
    remainingCount: Object.keys(posts).length
  });

};

export default setCounters;
