import React, { Component } from 'react'

class Search extends Component {
    state ={
        text: ''
    };
    onChange = (e) => {
        // this.setState({ text: e.target.value });
        this.setState({ [e.target.name]: e.target.value }); // For mutliple elements in form like email, etc.
    }
    onSubmit = (e) => {     // If arrow function is not used then it must to be bind the function in return() using this.onSubmit.bind(this)
        e.preventDefault();
        console.log(this.state.text);
        
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search;
