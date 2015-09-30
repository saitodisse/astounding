let setAllPosts = function(input, state) {

  var posts = input.posts;
  var keys = Object.keys(posts);
  var all_posts = keys.map((key) => {
    var ref = state.get('nextRef');
    let post = {
      $ref: ref,
      isSaving: false,
      text: posts[key].text,
      id: posts[key].id
    };
    state.set('nextRef', ref + 1);
    state.set(['posts', post.$ref], post);
    return post;
  });

};

export default setAllPosts;
