import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import './css/index.css';
import App from './Apps/App1';
import App2 from './Apps/App2';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navbar';
import UserPlain from './components/UserPlain';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar className="red" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="text-light">Profile Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    {/* <Nav.Link to="/app">App</Nav.Link>
                    <Nav.Link to="/app2">App2</Nav.Link> */}
                    {/* <li><Link class="link-dark m-2" to="/app">View Profile</Link></li> */}
                    <li><Link class="link-light m-2" to="/app2">Search for employees</Link></li>
                </Nav>
                <Nav>
                <NavDropdown title="Profile" id="navbarScrollingDropdown" className='p-10'>
                    <NavDropdown.Item href="/app">View Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Sign Out</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

      {/* <nav>
        <ul>
          <li><Link to="/app">App</Link></li>
          <li><Link to="/app2">App2</Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/app" exact element={<App />} />
        <Route path="/app2" exact element={<App2 />} />
        <Route path="/user/:firstName" exact component={<UserPlain />}></Route>
      </Routes>
      
      {/* <App2 /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
