import React, { Component } from 'react';
import UserItem from '../users/UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

// class Users extends Component {

//     state = {
//         users: [
//             {
//                 id: '1',
//                 login: 'mojombo1',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//                 html_url: "https://github.com/mojombo"
//             },
//             {
//                 id: '2',
//                 login: 'mojombo2',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//                 html_url: "https://github.com/mojombo"
//             },
//             {
//                 id: '3',
//                 login: 'mojombo3',
//                 avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//                 html_url: "https://github.com/mojombo"
//             }
//         ]
//     };

//     render() {
//         return (
//             <div stlye={userStyle}>
//                 {this.state.users.map(user => (
//                     // <div key={user.id}> {user.login}</div>  // Key is must for each child in the list due to map()
//                     <UserItem key={user.id} user={user} />  // Props are send to UserItem Component
//                 ))}
//             </div>
//         );
//     }
// }

// const userStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem'
// }


// HTTP REQUESTS & UPDATING STATE
const Users = ({users, loading}) => {
    if(loading){
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

Users.protoTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users;