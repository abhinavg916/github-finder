import React, { Component } from 'react';
import PropTypes from 'prop-types';  

// class UserItem extends Component {

    // State - It is just an JavaScript Object
        // Using Constructors
        // constructor() {
        //     super();
        //     this.state = {
        //         id: '1',
        //         login: 'mojombo',
        //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        //         html_url: "https://github.com/mojombo"
        //     }
        // }

        // Using state keyword
        // state = {
        //     id: '1',
        //     login: 'mojombo',
        //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        //     html_url: "https://github.com/mojombo"
        // };
    
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
    // render() {
    //     // const { login, avatar_url, html_url } = this.state;     // { } pulls data out of the object 
    //     const { login, avatar_url, html_url } = this.props.user;   // Props coming from Users Component 

    //     // Functional Components because it has no state and only used for displaying
    //     return (
    //         <div className="card text-center">
    //             <img src = {avatar_url} alt="" className="round-img" style={{width: '60px'}} /> {/* this.state is used to access the state data*/}
    //             <h3>{login}</h3>
    //             <div>
    //                 <a href={html_url} classaName="btn btn-dark btn-sm my-1">More</a>
    //             </div>
    //         </div>
    //     );
    // }
// export default UserItem;

// Stateless Functional Component
// Method 1: Simple Function
            // function UserItem { 
            // render() {
            //          return (
            //              so on...
            //          );
            //      }
            //  }
// Method 2: Using Arrow Functions then no need of render()
// const UserItem = (props) => {
// const UserItem = ({user: {login, avatar_url, html_url}}) => {       // Destructuring
//         // const { login, avatar_url, html_url } = props.user; // this keyword is not required because now it is not a class and props are sent as arguement in the function
//         return (
//             <div className="card text-center">
//                 <img src = {avatar_url} alt="" className="round-img" style={{width: '60px'}} /> {/* this.state is used to access the state data*/}
//                 <h3>{login}</h3>
//                 <div>
//                     <a href={html_url} classaName="btn btn-dark btn-sm my-1">More</a>
//                 </div>
//             </div>
//         );
// };

// UserItem.propTypes = {      // Proptypes
//     user: PropTypes.object.isRequired,  // Shortcut: ptor
// };


// HTTP REQUESTS & UPDATING STATE
const UserItem = ({user: {login, avatar_url, html_url}}) => {
        return (
            <div className="card text-center">
                <img src = {avatar_url} alt="" className="round-img" style={{width: '60px'}} /> {/* this.state is used to access the state data*/}
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
