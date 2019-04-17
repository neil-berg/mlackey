import React from 'react';
import styled from 'styled-components';

const SideContainer = styled.div`
  width: 150px;
  height: ${props => props.galleryHeight}px;
  background: var(--white);
  //position: fixed;
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 20px;
  padding: 0;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
      <div className="image">2</div>
      <div className="image">3</div>
      <div className="image">4</div>
      <div className="image">5</div>
      <div className="image">6</div>
    </SideContainer>
  );
};

export default SideGallery;
