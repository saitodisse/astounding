let setVisiblePosts = function(input, state) {

  let posts = state.get('posts');
  let filter = state.get('filter');
  let visiblePosts = Object.keys(posts).filter(function(key) {
    let post = posts[key];
    return (
      !post.isRemoving
    );
  });
  state.set('visiblePosts', visiblePosts);

};

export default setVisiblePosts;
