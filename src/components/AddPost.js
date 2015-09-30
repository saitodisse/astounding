import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  isSaving: ['isSaving'],
  newPostText: ['newPostText'],
  //onChangeTextArea: ['onChangeTextArea']
})
class AddPost extends React.Component {
  addPost(event) {

    event.preventDefault();

    // this.props.signals.newPostTextChanged({
    //   text: React.findDOMNode(this.refs.post).value
    // });

    var textContent = React.findDOMNode(this.refs.post).value;

    if(textContent.length === 0) {
      return;
    }

    this.props.signals.newPostSubmitted({
      text: textContent
    });
  }

  onPostTextAreaChange(event) {
    this.props.signals.newPostTextChanged(true, {
      text: event.target.value
    });
  }

  // value={this.props.newPostText}
  // onChange={this.setNewPostText.bind(this)}

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
                rows="10"
                id="new-post"
                ref="post"
                autoComplete="off"
                placeholder="new post"
                disabled={this.props.isSaving}
                value={this.props.newPostText}
                onChange={(e) => this.onPostTextAreaChange(e)}
              />
              <button
                className="btn"
                onClick={this.buttonClicked}
              >save</button>
            </div>
          </div>
      </form>
    );
  }

}

export default AddPost;
