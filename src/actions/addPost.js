var Remarkable = require('remarkable');
var hljs = require('highlight.js');
import config from '../config.js';

var md = new Remarkable({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value
    } catch (err) {}

    return '' // use external default escaping
  }
})

let addPost = function(input, state, output) {
  var ref = state.get('nextRef');
  let post = {
    $ref: ref,
    isSaving: true,
    text: state.get('newPostText'),
    htmlResult: md.render(state.get('newPostText'))
  };

  state.set(['posts', ref], post);
  state.set('newPostText', config.initial_text);
  state.set('nextRef', ref + 1);

  output({
    ref: ref
  });
};

export default addPost;
