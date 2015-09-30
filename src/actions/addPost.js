var Remarkable = require('remarkable');
var hljs = require('highlight.js');

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
    title: state.get('newPostTitle'),
    htmlResult: md.render(state.get('newPostTitle'))
  };

  state.set(['posts', ref], post);
  state.set('newPostTitle', '');
  state.set('nextRef', ref + 1);

  output({
    ref: ref
  });
};

export default addPost;
