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
              <UserCard sid={user.sid} firstName={user.firstName} lastName={user.lastName} shortName={user.shortName} voicePath={user.voicePath}/>
          ))}
        </ul>
    </div>
  );

}

export default Users;