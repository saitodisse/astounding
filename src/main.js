import React from 'react';
// import ReactiveRouter from 'reactive-router';

import App from './App.js';
import controller from './controller.js';
import {Container} from 'cerebral-react';
import CerebralRouter from 'cerebral-router';

// Actions
import addPost from './actions/addPost.js';
import setCurrentPost from './actions/setCurrentPost.js';
import removePostStarting from './actions/removePostStarting.js';
import removePost from './actions/removePost.js';
import removePostFromServer from './actions/removePostFromServer.js';
import setNewPostText from './actions/setNewPostText.js';
import setCounters from './actions/setCounters.js';
import savePost from './actions/savePost.js';
import updatePost from './actions/updatePost.js';
import removeAllPosts from './actions/removeAllPosts.js';
import loadFromServer from './actions/loadFromServer.js';
import setAllPosts from './actions/setAllPosts.js';
import setVisiblePosts from './actions/setVisiblePosts.js';

// Signals
controller.signal('routeChanged',
  removeAllPosts,
  [
    loadFromServer, {
      success: [setAllPosts]
    }
  ],
  setCounters,
  setVisiblePosts
);

controller.signal('newPostTextChanged', setNewPostText);

controller.signal('newPostSubmitted',
  addPost,
  setVisiblePosts,
  setCounters,
  [
    savePost, {
      success: [updatePost]
    }
  ]
);

controller.signal('removePostClicked',
  removePostStarting,
  setVisiblePosts,
  [
    removePostFromServer, {
      success: [removePost]
    }
  ],
  setCounters,
  setVisiblePosts
);

controller.signal('editPostClicked',
  setCurrentPost
);

// ROUTER
CerebralRouter(controller, {
  '/': 'routeChanged'
}, {
  baseUrl: ''
}).trigger();

React.render(<Container controller={controller} app={App}/>, document.querySelector('#app'));

