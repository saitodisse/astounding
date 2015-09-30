let loadEachPost = function(input, state) {

  var posts = input.posts;
  var keys = Object.keys(posts);
  keys.map((key) => {
    var ref = state.get('nextRef');
    let post = {
      $ref: ref,
      isSaving: false,
      text: posts[key].text,
      htmlResult: posts[key].htmlResult,
      id: posts[key].id
    };
    state.set('nextRef', ref + 1);
    state.set(['posts', post.$ref], post);
    return post;
  });

};

export default loadEachPost;
