import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 20px 0 160px;
  padding-left: 20px;
  background: var(--red);
  background: goldenrod;

  > li {
    color: var(--black);
    padding: 0.15em 0;
  }

  > li a {
    color: blue;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <li>
        <Link to="/">Meredith Lackey</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <a href="google.com">Notes</a>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </NavContainer>
  );
};

export default NavBar;