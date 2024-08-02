import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Nav } from 'react-bootstrap';
import { HeaderContainer, Logo } from './header-styles';
const Header = () => {
    return (_jsx(HeaderContainer, { children: _jsxs(Navbar, { expand: "lg", children: [_jsx(Logo, { children: "Paulinha.Dev" }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: _jsxs(Nav, { className: "ms-auto justify-content-between w-50", children: [_jsx(Nav.Link, { href: "#home", children: "Home" }), _jsx(Nav.Link, { href: "#about", children: "Sobre mim" }), _jsx(Nav.Link, { href: "#services", children: "Skils" }), _jsx(Nav.Link, { href: "#portfolio", children: "Portfolio" }), _jsx(Nav.Link, { href: "#contact", children: "Contato" })] }) })] }) }));
};
export default Header;
