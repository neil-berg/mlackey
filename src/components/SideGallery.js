import React from 'react';
import styled from 'styled-components';

const SideContainer = styled.div`
  width: 150px;
  height: calc(100vh - 2em);
  background: var(--white);
  position: fixed;
  padding: 1em;
  border: 1px black solid;
`;

const SideGallery = () => {
  return (
    <SideContainer>
      <p>side gallery</p>
    </SideContainer>
  );
};

export default SideGallery;
