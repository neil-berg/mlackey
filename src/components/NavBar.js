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
    padding: 0.15em 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => (props.selected ? 'white' : 'black')};
`;

const NavBar = () => {
  return (
    <NavContainer id="nav">
      <li>
        <StyledLink to="/" selected>
          Meredith Lackey
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/work">Work</StyledLink>
      </li>
      <li>
        <a href="google.com">Notes</a>
      </li>
      <li>
        <StyledLink to="/contact">Contact</StyledLink>
      </li>
    </NavContainer>
  );
};

export default NavBar;
