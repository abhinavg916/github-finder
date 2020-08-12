import React, { Component } from 'react';
import PropTypes from 'prop-types';             // Proptypes Library

class Navbar extends Component {
    
    static defaultProps = {         // Default Props (if not provided in App.js)
        title: 'GitHub Finder',
        icon: 'fab fa-github'
    };

    // Prop Types
    // It is like a type jacket which means it tells whether prop should be a string or number or array or object, etc
    // To use it, PropTypes library is used
    static propTypes = {            // Prop types
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className="navbar bg-primary">
                {/* <h1><i class="fab fa-github" /> Navbar</h1> */}
                <h1><i class={this.props.icon} /> {this.props.title}</h1> {/* Accessing Props*/}
            </nav>
        )
    }
}

export default Navbar;
