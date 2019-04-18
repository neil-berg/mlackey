import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 30px;
  left: 160px;
  padding-left: 1.75em;
  color: var(--black);
  font-size: 0.85em;

  a {
    letter-spacing: 0.05em;
    color: var(--black);
    font-weight: bold;
    transition: all 0.3s ease-out;
    :hover {
      color: var(--white);
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>
      site by <a href="https://neilberg.dev">neil berg</a>
    </p>
  </StyledFooter>
);

export default Footer;
