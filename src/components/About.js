import React from 'react';
import styled from 'styled-components';

import SideGallery from './SideGallery';
import NavBar from './NavBar';

const Wrapper = styled.div`
  background: var(--red);
  margin: 0 1em 1em 160px;
  height: calc(100vh - 100px - 20px);
`;

const About = () => {
  return (
    <Wrapper>
      <p>About</p>
    </Wrapper>
  );
};

export default About;
