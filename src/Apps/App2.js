import '../css/App.css';
import User from '../components/user';
import UserCard from '../components/UserCard';
import Navigation from '../components/Navbar';
import UserList from '../components/UserList';
import SearchUser from '../components/SearchUser';
import GetAudio from '../components/GetAudio';

function App2() {
  return (
    <div>
      <Navigation />
      <br class="my-2"></br>
      <UserList />
    </div>
  );
}

export default App2;
