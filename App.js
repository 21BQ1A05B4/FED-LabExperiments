// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// // import CounterClass from './LabPrograms/CounterClass';
// import CounterFunction from './LabPrograms/CounterFunction';
// import LabProgram_7 from './LabPrograms/LabProgram_7';
// import LabProgram_8 from './LabPrograms/LabProgram_8';
// import LabProgram_9 from './LabPrograms/LabProgram_9';
// import LabProgram_10 from './LabPrograms/LabProgram_10';
import Experiment10 from './LabPrograms/Experiment10';
import DigitalClockFunc from './LabPrograms/DigitalClockFunc';

// using context hook with the necessary example 

//  Code : there are two files : App.js and BlogContextDemo.js

//  here the code flows 

import React from 'react'
import BlogContextDemo from './BlogContextDemo';
const bloginfo = {
  React: {
    post: "Learn use Context Hooks",
    author:"Veena K"
  },
  NodeJs: {
    post: "Node Commands",
    author: "Veena M"
  }
};

export const BlogContext = React.createContext(bloginfo);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <CounterClass /> */}
      {/* <CounterFunction /> */}
      {/* <LabProgram_7 /> */}
      {/* <LabProgram_8 /> */}
      {/* <LabProgram_9 /> */}
      {/* <LabProgram_10 /> */}
      <Experiment10 />
      <DigitalClockFunc />
      <div align="center">
        <h1>use Context() Demo</h1>
        <BlogContext.Provider value={bloginfo}>
            <BlogContextDemo />
        </BlogContext.Provider>
      </div>
    </div>
  );
}

export default App;
