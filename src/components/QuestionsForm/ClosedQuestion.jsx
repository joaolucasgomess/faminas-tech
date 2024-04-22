import React, { useState } from 'react';
import styled from 'styled-components';

const ClosedQuestion = ({ question }) => {
  const [rating, setRating] = useState('');

  const handleOptionChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <StyledQuestion>
      <Pergunta>
        <p>{question}</p>
      </Pergunta>
      <StyledOptions>
        {["ótimo", "bom", "regular", "não satisfatório"].map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${question}-${index}`}
              name={`option-${question}`}
              value={option}
              checked={rating === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${question}-${index}`}>{option}</label>
          </div>
        ))}
      </StyledOptions>
    </StyledQuestion>
  );
};

const Pergunta = styled.div`
  margin-bottom: 10px;
`

const StyledQuestion = styled.div`
  
`

const StyledOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row; /* Por padrão, exibe as opções em linha */

  gap: 10px;

  input[type='radio'] {
    display: none;
  }

  label {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 200px;
    cursor: pointer;
  }

  input[type='radio']:checked + label {
    background-color: #97c7ffba;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export default ClosedQuestion;
