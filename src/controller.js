import Controller from 'cerebral';
import Model from 'cerebral-baobab';
import config from './config.js';

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
  newPostText: config.initial_text,
  isSaving: false,
  isRemoving: false
};

const model = Model(state);
export default Controller(model);
