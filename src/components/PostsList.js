import React from 'react';
import Post from './Post.js';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  posts: ['posts']
})
class PostsList extends React.Component {
  renderPost(post_id, index) {
    return <Post key={index} index={index} post={this.props.posts[post_id]}/>;
  }

  render() {
    return (
      <section id="main">
        <ul className="list-group">
          {Object.keys(this.props.posts)
            .map(this.renderPost.bind(this))}
        </ul>
      </section>
    );
  }

}

export default PostsList;
