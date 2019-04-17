import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--red);
  margin: 0 20px 20px 160px;
  height: calc(100vh - 100px - 20px - 20px);
`;

const Contact = () => {
  return (
    <Wrapper>
      <p>Contact</p>
    </Wrapper>
  );
};

export default Contact;
