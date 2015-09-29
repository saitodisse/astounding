let updatePost = function(input, state) {

  var path = ['posts', input.ref];

  state.merge(path, {
    id: input.id,
    isSaving: false
  });

};

export default updatePost;
