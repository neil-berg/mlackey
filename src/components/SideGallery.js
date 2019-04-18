import React from 'react';
import styled from 'styled-components';

const SideContainer = styled.div`
  width: 150px;
  height: ${props => props.galleryHeight}px;
  background: var(--white);
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px black solid;

  .image {
    width: 80px;
    height: 80px;
    background: green;
  }
`;

const SideGallery = ({ galleryHeight }) => {
  return (
    <SideContainer galleryHeight={galleryHeight}>
      <div className="image">1</div>
    </SideContainer>
  );
};

export default SideGallery;
