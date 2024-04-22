import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de seta
import { useNavigate } from 'react-router-dom';
import { colors } from '../../constants/colors';

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
  font-size: 22px;
  color: ${colors.darkBlue};
  cursor: pointer;
`;

export default BackButton;
