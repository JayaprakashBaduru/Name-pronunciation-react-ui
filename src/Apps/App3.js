import '../css/App.css';
import User from '../components/user';
import UserCard from '../components/UserCard';
import Navigation from '../components/Navbar';
import UserList from '../components/UserList';
import SearchUser from '../components/SearchUser';
import GetAudio from '../components/GetAudio';
import { BrowserRouter, Switch, Routes, Route, Link } from 'react-router-dom';
import App from './App1';



function App3() {
  return (
    <div>
      <Navigation />
      <br class="my-2"></br>
    </div>
  );
}

export default App3;
