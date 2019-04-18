import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: 120px;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 20px 0 160px;
  padding: 1.75em;
  background: var(--red);

  > li {
    padding: 0.15em 0;
    font-size: 1.15em;
    font-weight: bold;
    letter-spacing: 0.05em;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => (props.selected ? 'var(--white)' : 'var(--black)')};
`;

const NavBar = () => {
  return (
    <nav>
      <NavContainer>
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
    </nav>
  );
};

export default NavBar;
