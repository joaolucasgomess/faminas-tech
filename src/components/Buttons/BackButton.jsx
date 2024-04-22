import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de seta
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega para a página anterior
  };

  return (
    <StyledArrowIcon onClick={handleGoBack} />
  );
};

const StyledArrowIcon = styled(FaArrowLeft)`
  display: flex;
  margin-left: 5%;
  margin-top: 5%;
  font-size: 22px;
  color: white;
  cursor: pointer;
`;

export default BackButton;
