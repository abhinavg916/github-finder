import React, { Component } from 'react';       
import PropTypes from 'prop-types';             // Proptypes Library
import { Link } from 'react-router-dom';        // {} are used for components which does not support default export

// class Navbar extends Component {
    
//     static defaultProps = {         // Default Props (if not provided in App.js)
//         title: 'GitHub Finder',
//         icon: 'fab fa-github'
//     };

//     // Prop Types
//     // It is like a type jacket which means it tells whether prop should be a string or number or array or object, etc
//     // To use it, PropTypes library is used
//     static propTypes = {            // Prop types
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     };

//     render() {
//         return (
//             <nav className="navbar bg-primary">
//                 {/* <h1><i class="fab fa-github" /> Navbar</h1> */}
//                 <h1><i class={this.props.icon} /> {this.props.title}</h1> {/* Accessing Props*/}
//             </nav>
//         )
//     }
// }

// export default Navbar;


// Stateless Functional Component
// Using Arrow Functions then no need of render()
// this keyword is not required because now it is not a class and props are sent as arguement in the function
// const Navbar = (props) => {
// const Navbar = ({icon, title}) => {     // Destructuring
//     return (
//         <nav className="navbar bg-primary">
//             <h1><i class="fab fa-github" /> Navbar</h1>
//                 {/* <h1><i class={props.icon} /> {props.title}</h1> */}
//                 <h1><i class={icon} /> {title}</h1>
//         </nav>
//     );

// }

// Navbar.defaultProps = {            // ComponentName.PropsName for Props
//     title: 'GitHub Finder',
//     icon: 'fab fa-github'
// };

// Navbar.propTypes = {    
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
// };


// HTTP REQUESTS & UPDATING STATE
const Navbar = ({icon, title}) => {  
    return (
        <nav className="navbar bg-primary">
                <h1><i class={icon} /> {title}</h1>
                {/* The below code strategy is avoided due to <a> tag because it clears the state upon clicking. Thus, on going back, the data on website is not shown. */}
                {/* <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul> */}
                <ul>
                    <li>
                        <Link to="/">Home</Link> {/* Maintains the state*/}
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
        </nav>
    );
}

Navbar.defaultProps = {          
    title: 'GitHub Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {    
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;