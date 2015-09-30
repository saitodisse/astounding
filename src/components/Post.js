import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({})
class Post extends React.Component {
  render() {
    return (
      <li className='list-group-item'>

        <div dangerouslySetInnerHTML={ {__html: this.props.post.htmlResult} } />

        { this.props.post.isSaving ?
          <small> (saving)</small> :
          null }

        {this.props.post.isRemoving ?
          <small> (removing)</small> :
          null }

        <div className="text-right post-footer-buttons">
          <button
            className="btn btn-standard btn-xs"
            disabled={this.props.post && (this.props.post.isSaving || this.props.post.isRemoving)}
            onClick={() => this.props.signals.editPostClicked({ ref: this.props.post.$ref })}>
          edit</button>
          <button
            className="btn btn-standard btn-xs"
            disabled={this.props.post && (this.props.post.isSaving || this.props.post.isRemoving)}
            onClick={() => this.props.signals.removePostClicked({ ref: this.props.post.$ref })}>
          del</button>
        </div>

      </li>
    );
  }
}

export default Post;
