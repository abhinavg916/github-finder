import React, { Component, Fragment } from "react";
import "./App.css";

// Functional Component
// function App() {
//   return (
//     <div className="App">
//      <h1>Hello from React</h1>
//     </div>
//   );
// }

// Class Compenents
// class App extends React.Component {
// React.Component class contains all the lifecycle methods
class App extends Component {
  // Imported at the top
  render() {
    // render() is one of the lifecycle method which runs at certain points to render components
    
    // Method 1: Using JSX 
    // return (
    
      // className
      // <div className="App">
      //     <h1>Hello from React</h1>
      //     {/* JSX - JavaScript Syntax Extension, basically syntatic sugar to be able to write the output of the components in XML or HTML like way but under the hood it is JavaScript.
      //         JSX saves time as less code to write for output*/}
      //     {/* Diff b/n HTML & JSX: HTML - class and JSX - className; HTML - for and JSX - htmlFor */}
      //     {/* All JSX element must be have atleast one parent element otherwise use Fragment toa avoid */}
      //     <h2>Good bye</h2>    // Works because div is the parent element
      //     index.html using className
      //     <div id="root">
      //     <div class="App">
      //     <h1>Hello from React</h1>
      //     <h2>Good bye</h2>
      //     </div>
      //     </div>
      //  </div>
      //     <h2>Good bye</h2>    // Doesn't work because it has no parent element

      // Fragments
      // Method 1 - Nornal Way
        // <Fragment>
        //   <h1>Hello from React</h1>
        //   <h2>Good bye</h2> {/* Works without any parent element */}
        // </Fragment>
        // index.html using Fragments
        // <div id="root">
        //   <h1>Hello from React</h1>
        //   <h2>Good bye</h2>
        // </div>
        // 
      // Method 2 - Another way of declaring fragment
      // <>
      // <h1>Hello from React</h1>
      // <h2>Good bye</h2> {/* Works without any parent element */}
      // </>

    // );

    // Method 2: Using JavaScript
      return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hello from React'));
      // JavaScript way of writing can get code very messy and hard to understand.abs
      // That's why, JSX is preferred in ReactJs
  }
}
export default App;
