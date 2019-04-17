import React from 'react';
import styled from 'styled-components';

import SideGallery from './SideGallery';
import NavBar from './NavBar';

const Wrapper = styled.div`
  background: var(--red);
  margin: 0 20px 20px 160px;
  height: calc(100vh - 100px - 20px - 20px);
  padding: 1em;

  > p {
    font-size: 1em;
    max-width: 500px;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <p>Meredith Lackey is a filmmaker based in Los Angeles.</p>
      <br />
      <p>
        Her work has screened internationally at festivals including Sundance,
        NYFF, FIDMarseille, and Edinburgh.
      </p>
      <br />
      <p>
        She holds a BA in Philosophy and Media from Hampshire College, and an
        MFA in Moving Image from the University of Illinois Chicago.
      </p>
      <br />
      <p>
        She is the recipient of the UFVA Carole Fielding Grant and is a Princess
        Grace Foundation Honorarium winner.
      </p>
    </Wrapper>
  );
};

export default About;
