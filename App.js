// import logo from './logo.svg';
import './App.css';
import CounterFunction from './CounterFunction';
// import HelloWorld from './HelloWorld';
// import CounterClass from './CounterClass';
// import PropsDemo from './PropsDemo';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         {/* Learn React */}
  //         This is Your First React Man Joseph Korivi
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <PropsDemo fname="Joe" lname="Korivi" color="#0000ff" /> */}
      {/* <HelloWorld /> */}
      <CounterFunction />
    </div>
  );
}

export default App;




