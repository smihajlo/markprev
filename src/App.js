import React from 'react';
import Editor from './components/Editor';
import {Helmet} from "react-helmet";


import './App.scss'; 

  



function App() {
  return (
    
    <div className="App">
      <Helmet>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </Helmet>
      <Editor />
    </div>
  );
}

export default App;
