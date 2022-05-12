import '../css/App.css';
import User from '../components/user';
import UserCard from '../components/UserCard';
import Navigation from '../components/Navbar';

function App() {
  return (
    <div>
      <Navigation />
      <br class="my-4"></br>
      <User />
    </div>
  );
}

export default App;
