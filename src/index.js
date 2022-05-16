import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import './css/index.css';
import App from './Apps/App1';
import App2 from './Apps/App2';
// import App3 from './Apps/App3';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navbar';
import UserPlain from './components/UserPlain';
import UserView from './components/UserView';
import Login from './components/Login';
import { Provider, useDispatch } from 'react-redux';
import store from './app/store'; 
import { useSelector } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={store}>
  <React.StrictMode>
      <BrowserRouter>
        
        <Navigation />

      {/* <nav>
        <ul>
          <li><Link to="/app">App</Link></li>
          <li><Link to="/app2">App2</Link></li>
        </ul>
      </nav> */}
      <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/profile" exact element={<App />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/search" exact element={<App2 />} />
        <Route path="/user/:sid" exact element={<UserView />}></Route>
      </Routes>
      
      {/* <App2 /> */}
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
