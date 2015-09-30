import Controller from 'cerebral';
import Model from 'cerebral-baobab'

const state = {
  nextRef: 0,
  url: '',
  posts: {},
  visiblePostsIds: [],
  visiblePosts: Model.monkey({
    cursors: {
      posts: ['posts'],
      ids: ['visiblePostsIds']
    },
    get: function (data) {
      return data.ids.map(function (id) {
        return data.posts[id];
      });
    }
  }),
  newPostText: '',
  isSaving: false,
  isRemoving: false
};

const model = Model(state);
export default Controller(model);
