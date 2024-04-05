import React from 'react';
import styled from 'styled-components';

const SendFormButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Enviar
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 50px;
  background-color: #a5deffc1;
  color: white;
  border: none;
  border-radius: 100px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export default SendFormButton;
