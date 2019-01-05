import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";

function Header(){
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          Google Books Bookshelf
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">
          Search
          </NavItem>
          <NavItem eventKey={2} href="/library">

          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header;