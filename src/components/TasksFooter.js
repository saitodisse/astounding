import React from 'react/addons';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  remainingCount: ['remainingCount']
})
class PostsFooter extends React.Component {
  renderRemainingCount() {
    let count = this.props.remainingCount;
    if (count === 0 || count > 1) {
      return count + ' items';
    } else {
      return count + ' item';
    }
  }

  render() {
    return (
      <footer id="footer">
        <span id="post-count"><strong>{this.renderRemainingCount()}</strong></span>
      </footer>
    );
  }

}

export default PostsFooter;
