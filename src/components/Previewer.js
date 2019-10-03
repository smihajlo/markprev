import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify'
import '../App.scss'; 

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});



function Previewer(props) {
  let markdownContent =  marked(props.content.toString());
  return (
    <React.Fragment>
      <div content="editable" id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(markdownContent)}}>

      </div>
    
    </React.Fragment>
  );
}

export default Previewer;
