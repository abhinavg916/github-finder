import React, { Component } from 'react';

class UserItem extends Component {

    // State - It is just an JavaScript Object
        // Using Constructors
        // constructor() {
        //     super();
        //     this.state = {
        //         id: 'id',
        //         login: 'mojombo',
        //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        //         html_url: "https://github.com/mojombo"
        //     }
        // }

        // Using state keyword
        state = {
            id: 'id',
            login: 'mojombo',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: "https://github.com/mojombo"
        }
    
    // render() {
    //     return (
    //         <div className="card text-center">
    //             <img src = {this.state.avatar_url} alt="" className="round-img" style={{width: '60px'}} /> {/* this.state is used to access the state data*/}
    //             <h3>{this.state.login}</h3>
    //             <div>
    //                 <a href={this.state.html_url} classaName="btn btn-dark btn-sm my-1">More</a>
    //             </div>
    //         </div>
    //     );
    // }

    // Destructuring - To avoid repeatitive use of this.state and makes code neater
    render() {

        const { login, avatar_url, html_url } = this.state;     // { } pulls data out of the object 

        return (
            <div className="card text-center">
                <img src = {avatar_url} alt="" className="round-img" style={{width: '60px'}} /> {/* this.state is used to access the state data*/}
                <h3>{login}</h3>
                <div>
                    <a href={html_url} classaName="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        );
    }
}

export default UserItem;
