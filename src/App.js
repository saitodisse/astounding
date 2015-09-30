import React from 'react';
import AddPost from './components/AddPost.js';
import PostsList from './components/PostsList.js';
import PostsFooter from './components/PostsFooter.js';
import {Decorator as Cerebral} from 'cerebral-react';

var utils_get_rethink_db_ngrok = require('./utils/rethink-db-ngrok.js');

@Cerebral({
  visiblePosts: ['visiblePosts'],
  posts: ['posts']
})
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="buttonsTop">
          <a href={utils_get_rethink_db_ngrok()} target='_tab'>rethink db</a>
        </div>
        <section id="postapp">
          <header id="header">
            <h1>Posts</h1>
          </header>

          {Object.keys(this.props.posts).length ? <PostsList/> : null}
          {Object.keys(this.props.posts).length ? <PostsFooter/> : null}

          <hr/>

          <AddPost/>
        </section>
      </div>
    );
  }
}

module.exports = App;
