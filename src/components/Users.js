import React from 'react';
import UserCard from './UserCard';

const Users = ({ users, loading }) => {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

  return (
    <div>
        <ul className='list-group mb-4'>
          {users.map(user => (
              <UserCard name={user.name} email={user.email} pref_name={user.username}/>
          ))}
        </ul>
    </div>
  );

}

export default Users;