import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state ={
        text: ''
    };

    static propType = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    
    onChange = (e) => {
        // this.setState({ text: e.target.value });
        this.setState({ [e.target.name]: e.target.value }); // For mutliple elements in form like email, etc.
    }

    onSubmit = (e) => {     // If arrow function is not used then it must to be bind the function in return() using this.onSubmit.bind(this)
        e.preventDefault();
        // console.log(this.state.text);
        if(this.state.text == ''){      // Alert for not entering any text in search bar
            this.props.setAlert('Please enter something', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState ( { text: '' });
        }
    }

    render() {

        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <form onSubmit= {this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
            </div>
        )
    }
}

export default Search;
