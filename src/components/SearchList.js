import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import UserCard from './UserCard';
import Users from './Users';

function SearchList({ filteredPersons }) {
  // const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setusersPerPage] = useState(5);

  const users = filteredPersons

  // Get current users
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const filtered = filteredPersons.map(user =>  
    <ul className='list-group mb-4'>  
      <UserCard name={user.name} email={user.email} pref_name={user.username}/>  
    </ul>
  ); 

  return (
    <div className='container mt-5'>
      <Users users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
    // filtered
  );
}

export default SearchList;