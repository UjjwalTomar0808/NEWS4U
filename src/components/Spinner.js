import React from 'react';
import styled from 'styled-components';
import loading from './loading.gif';

const SpinnerContainer = styled.div`
  text-align: center;
  margin-top: 3rem; /* Adjust the margin based on your design */
`;

const SpinnerImage = styled.img`
  margin: 0 auto;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerImage src={loading} alt="Loading..." />
    </SpinnerContainer>
  );
};

export default Spinner;
