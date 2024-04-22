import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const ProjectCard = ({ project, marked, handleCheckboxClick, handleOpenModal }) => {
  return (
    <StyledProjectContainer
      marked={marked}
      onClick={() => handleOpenModal(project)}
    >
      <StyledHeaderContainer>
        <input
          type="checkbox"
          name=""
          id=""
          onClick={(e) => handleCheckboxClick(e, project.id)}
          checked={marked}
          style={{ transform: 'scale(1.5)', border:'none'}}
        />
        
      </StyledHeaderContainer>
      <StyledMainContainer>
        <h2>{project.table}</h2>
      </StyledMainContainer>
    </StyledProjectContainer>
  );
};

const StyledProjectContainer = styled.div`
    background-color: ${({ marked }) => (marked ? colors.lightBlue : '#ffffff36')};
    color: ${colors.midBlue};
    height: 20vh;
    width: 20vh;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(255, 255, 255, 0.2) 0px -3px 0px inset;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    position: relative;

    &:nth-child(2n) {
        margin-right: 0;
    }

    &:hover {
        cursor: pointer;
    }
    input{

    }
`;

const StyledMainContainer = styled.div`
  position: absolute;
  font-size: 38px;
`;

const StyledHeaderContainer = styled.div`
    position: absolute;
    top: 1em;
    right: 1em;
`;

export default ProjectCard;
