import '../css/App.css';
import User from '../components/user';
import UserCard from '../components/UserCard';
import Navigation from '../components/Navbar';
import { BrowserRouter, Switch, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navigation />
        <br class="my-4"></br>
        {/* <User /> */}
        <User />
    </div>
  );
}

export default App;
