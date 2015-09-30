import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  isSaving: ['isSaving'],
  newPostTitle: ['newPostTitle']
})
class AddPost extends React.Component {
  addPost(event) {
    event.preventDefault();
    if(this.props.newPostTitle.length === 0) {
      return;
    }

    this.props.signals.newPostSubmitted();
  }

  buttonClicked(event) {
    /**/console.log('\n>>---------\n event:\n', event, '\n>>---------\n');/*-debug-*/
  }

  setNewPostTitle(event) {
    this.props.signals.newPostTitleChanged({
      text: event.target.value
    });
  }

  render() {
    return (
      <form
        className="form-horizontal"
        id="post-form"
        onSubmit={this.addPost.bind(this)}>
         <div className="form-group">
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="new-post"
                autoComplete="off"
                placeholder="new post"
                disabled={this.props.isSaving}
                value={this.props.newPostTitle}
                onChange={this.setNewPostTitle.bind(this)}
              />
              <button
                className="bnt bnt-standard"
                onClick={this.buttonClicked}
              >save</button>
            </div>
          </div>
      </form>
    );
  }

}

export default AddPost;
