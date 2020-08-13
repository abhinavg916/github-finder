import React, { Component } from 'react';
import UserItem from '../users/UserItem';

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
class Users extends Component {
    render() {
        return (
            <div stlye={userStyle}>
                {this.props.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;