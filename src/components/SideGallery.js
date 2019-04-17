import React from 'react';
import styled from 'styled-components';

const SideContainer = styled.div`
  width: 150px;
  height: calc(100vh - 40px);
  background: var(--white);
  position: fixed;
  padding: 20px;
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
