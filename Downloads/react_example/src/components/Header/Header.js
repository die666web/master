import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home"> How are you</Navbar.Brand> */}
        <NavLink to='/' className='navbar-brand'>I find her</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="users" className='nav-link'>User</NavLink>
            <NavLink to="admin" className='nav-link'>Admin</NavLink>
          </Nav>
          <Nav>
            <button className='btn-login'>Login</button>
            <button className='btn-logup'>Logout</button>
            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavLink to = "login" className= "dropdown-item">Login</NavLink>
              <NavLink to = "log-out" className= "dropdown-item">Log out</NavLink>
              <NavLink to = "profile" className= "dropdown-item">Profile</NavLink>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default Header;