let addPost = function(input, state, output) {

  var ref = state.get('nextRef');
  let post = {
    $ref: ref,
    isSaving: true,
    title: state.get('newPostTitle')
  };

  state.set(['posts', ref], post);
  state.set('newPostTitle', '');
  state.set('nextRef', ref + 1);

  output({
    ref: ref
  });
};

export default addPost;
