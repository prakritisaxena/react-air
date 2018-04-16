import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default function NavBar() {
  return <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to='/login' className='form-link'>React-Air</NavLink>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavLink to='/about' className='form-link'>About Us</NavLink>
      <NavLink to='/contact' className='form-link'>Contact Us</NavLink>
    </Nav>
  </Navbar>;
}
