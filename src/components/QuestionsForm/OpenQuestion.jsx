import React from 'react';
import styled from 'styled-components';

const OpenQuestion = ({ question, onChange }) => {
  return (
    <StyledOpenQuestion>
      <label htmlFor="open-question">{question}</label>
      <input
        type="text"
        id="open-question"
        name="open-question"
        onChange={onChange}
      />
    </StyledOpenQuestion>
  );
};

const StyledOpenQuestion = styled.div`
  label {
    display: flex;
    margin-bottom: 10px;
  }

  input[type='text'] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 20px); /* Largura quase total com espaço de 10px em cada lado */
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 100px;
    margin-bottom: 10px; /* Espaçamento entre o input e a próxima pergunta */
  }
`;

export default OpenQuestion;
