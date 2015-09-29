let removePostStarting = function(input, state) {
  var path = ['posts', input.ref];
  let post = state.get(path);
  state.merge(path, {
    isRemoving: true
  });
};

export default removePostStarting;
