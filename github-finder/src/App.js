import React, { Component, Fragment } from "react";
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import "./App.css";
import Users from "./components/users/Users";
import axios from 'axios';

// INTRODUCTION TO COMPONENTS AND JSX
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
  // class App extends Component {
    // Imported at the top
    
    // render() {
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
        // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hello from React'));
        // JavaScript way of writing can get code very messy and hard to understand.abs
        // That's why, JSX is preferred in ReactJs
    // }
  // }



// EXPRESSIONS & CONDITIONALS in JSX
  // class App extends Component {
  //   foo = () => 'Bars';
  //   render () {
      // JavaScript Expressions with JSX
      // const name = 'John Doe';
      // return(
      //   <div className="App">
      //   <h1>Hello {name}</h1> {/* Js variable */}
      //   <h1>Hello {name.toUpperCase()}</h1> {/* Js Method */}
      //   <h1>Hello {1+1}</h1> {/* Js Expression */}
      //   <h1>Hello {this.foo()}</h1> {/* Method of same class but `this` must be used */}
      //   <h1>Hello {this.foo()}</h1> 
      //   </div>
      // );

      // JavaScript Conditionals with JSX
      // const loading = true;
        // Using if statement
        // if(loading) 
        //   return <h4>Loading...</h4>
      
        // Using Ternary operator
        // return(
        //     <div className="App">
        //        <h1>Hello {name}</h1>
        //       {loading ? <h4>Loading...</h4> : <h1>Not Loading...</h1>}          
        //     </div>
        //    );

        // Using && Operator
    //     const showName = true;
    //     const loading = false;
    //     return (
    //       <div className="App">
    //         {loading ? ( <h1>Loading... </h1> ) : ( <h1>Hello {showName && name}</h1> )} {/* Else part executed only if showName and name both are true */}
    //       </div>
    //     )
    // }
// }



// COMPONENTS, PROP & PROP TYPES
// Components
// class App extends Component {
//   render () {
//     return (
//       <div className='App'>
//         {/* <h1>Hello</h1>   */}
//         <Navbar />
//       </div>
//     );
//   }
// }

// Props
// Props - These are the properties that are passed into components from outside
// class App extends Component {
//     render () {
//       return (
//         <div className='App'>
//           {/* <Navbar title="GitHub Finder" /> */}
//           {/* <Navbar title="GitHub Fider" icon="fab fa-github" /> */}
//           <Navbar /> {/* Default Props present in Navbar.js are used */}
//         </div>
//       );
//     }
//   }

// Prop Types
// It is like a type jacket which means it tells whether prop should be a string or number or array or object, etc
// To use it, PropTypes library is used
// class App extends Component {
//   render () {
//     const number = [1,2,3,4];
//     return (
//       <div className='App'>
//         <Navbar title={number} /> {/* Warning! because prop type is not matched */}
//       </div>
//     );
//   }
// }



// COMPONENT STATE
// class App extends Component {
//   render() {
//     return (
//         <div className="App">
//           <Navbar />
//           <UserItem />
//         </div>
//     );
//   }
// }



// LIST & PASSING STATE WITH PROPS
// class App extends Component {
//     render() {
//       return (
//           <div className="App">
//             <Navbar />
//             <div className="container">
//               <Users />/
//             </div>
//           </div>
//       );
//     }
//   }



// STATELESS FUNCTIONAL COMPONENTS
// Before Hooks, Functional Components were used for stateless components (have no state in them)
// Eg: UserItem and Navbar
// Hence, there's no reason for functional components to be a class
// Converting UserItem and Navbar into functional components
// class App extends Component {
//   render() {
//     return (
//         <div className="App">
//           <Navbar />
//           <div className="container">
//             <Users />/
//           </div>
//         </div>
//     );
//   }
// }



// HTTP REQUESTS & UPDATING STATE
class App extends Component {

  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {    
    //  componentDidMount() is one of the lifecycle method and runs when component is mounted
    // axios.get('https://api.github.com/users').then(res => console.log(res.data));       // Axios deals with Promises   
    this.setState({ loading: true });     // .setState() is used to change of value in a state of a class based component
    const res = await axios.get('https://api.github.com/users');
    // console.log(res.data);
    this.setState({users: res.data, loading: false});   // After getting the data from API
  }

  render() {
    return (
        <div className="App">
          <Navbar />
          <div className="container">
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </div>
    );
  }
}

export default App;


