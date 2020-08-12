import React, { Component } from "react";
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
    // Lifecycle Method - Runs at certain points to render components
    return (
      <div className="App">
        <h1>Hello from React</h1>
      </div>
    );
  }
}
export default App;
