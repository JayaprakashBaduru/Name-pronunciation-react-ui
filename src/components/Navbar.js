import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import '../css/Navbar.css';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { BrowserRouter, Switch, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
// {<Avatar sx={{ bgcolor: grey[500] }}>A</Avatar>}

function Navigation() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        // e.preventDefault();


        dispatch(
            logout())

    }
    return (
        <Navbar className="red" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/profile" className="text-light">Profile Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    {/* <Nav.Link to="/app">App</Nav.Link>
                    <Nav.Link to="/app2">App2</Nav.Link> */}
                    {/* <li><Link class="link-dark m-2" to="/app">View Profile</Link></li> */}
                    <li><Link className="link-light m-2" to="/search">Search for employees</Link></li>
                </Nav>
                <Nav>
                <NavDropdown title="Profile" id="navbarScrollingDropdown" className='p-10 link-light'>
                            <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
                    <NavDropdown.Item><button onClick={(e) => handleLogout(e)}>Logout</button></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
  
  export default Navigation;
  