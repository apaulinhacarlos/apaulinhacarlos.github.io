import styled from 'styled-components';
export const HeaderContainer = styled.header `
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const Navbar = styled.nav `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div `
  font-size: 1.5em;
  color: #f4acb7;
  font-weight: bold;
  span {
    color: #9d8189;
  }
`;
export const NavLinks = styled.ul `
  list-style: none;
  display: flex;
  gap: 20px;
`;
export const NavLink = styled.li `
  cursor: pointer;
`;
