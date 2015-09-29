import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({})
class Post extends React.Component {
  render() {
    return (
      <li className='list-group-item'>
        <button
          className="btn btn-danger"
          disabled={this.props.post && (this.props.post.isSaving || this.props.post.isRemoving)}
          onClick={() => this.props.signals.removePostClicked({ ref: this.props.post.$ref })}>del</button>
        {this.props.post.title} {this.props.post.isSaving ?
          <small> (saving)</small> :
          null
        }
        {this.props.post.isRemoving ?
          <small> (removing)</small> :
          null
        }
      </li>
    );
  }
}

export default Post;
