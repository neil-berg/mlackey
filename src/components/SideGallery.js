import React from 'react';
import styled from 'styled-components';

import { numImages } from '../helper';

const ImageContainer = styled.div`
  width: 50px;
  height: ${props => props.galleryHeight}px;
  background: var(--white);
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .image {
    width: 50px;
    height: 50px;
    margin: 0;
  }
`;

const SideGallery = ({ galleryHeight }) => {
  const num = numImages(galleryHeight, window.innerWidth);
  const imageList = Array(num)
    .fill()
    .map((_, i) => (
      <img
        className="image"
        key={i}
        src={`/assets/gallery_${
          i < 14 ? i + 1 : Math.floor(Math.random() * 15 + 1)
        }.png`}
        alt="still from Cable Street"
      />
    ));

  return (
    <ImageContainer galleryHeight={galleryHeight}>{imageList}</ImageContainer>
  );
};

export default SideGallery;
