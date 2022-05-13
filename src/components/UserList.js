import React, { useState, useEffect } from 'react';
import '../css/App.css';
import axios from 'axios';
import User from '../components/user';
import UserCard from './UserCard';
import Navigation from '../components/Navbar';
import Users from './Users';
import Pagination from './Pagination';
import SearchUser from './SearchUser';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setusersPerPage] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
        setLoading(true);
        const res = await axios.get('http://192.168.0.100:8081//search/profiles');
        setUsers(res.data);
        console.log(res.data);
        setLoading(false);
    }

    fetchUsers();
  }, []);
  
  // console.log(users[0]);

  // Get current users
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <SearchUser details={users} />
      {/* <Users users={currentUsers} loading={loading} /> */}
      {/* <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />  */}
    </div>
  );
  
};

export default UserList;