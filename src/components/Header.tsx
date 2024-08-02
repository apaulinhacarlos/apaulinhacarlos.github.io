import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HeaderContainer, Logo } from './header-styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navbar expand="lg">
        <Logo>Paulinha.Dev</Logo>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-between w-50">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Sobre mim</Nav.Link>
            <Nav.Link href="#services">Skils</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
