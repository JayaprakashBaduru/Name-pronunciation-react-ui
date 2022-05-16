import '../css/App.css';
import User from '../components/user';
import UserCard from '../components/UserCard';
import UserPlain from '../components/UserPlain';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Login from '../components/Login';


function App() {
  const user = useSelector(selectUser);
  return (
    <div>
        {/* <Navigation /> */}
        <br class="my-4"></br>
      {/* <User /> */}
      {user ? <UserPlain /> : <Login/>}
        {/* <UserPlain /> */}
    </div>
  );
}

export default App;
