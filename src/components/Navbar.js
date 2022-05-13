import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple, grey} from '@mui/material/colors';
import '../css/Navbar.css';
import SearchUser from './SearchUser'

// {<Avatar sx={{ bgcolor: grey[500] }}>A</Avatar>}

function Navigation() {
    return (
        <Navbar className="red" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="text-light">Profile Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll></Nav>
                <Nav>
                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">View Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Log Out</NavDropdown.Item>
                </NavDropdown>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
  
  export default Navigation;
  