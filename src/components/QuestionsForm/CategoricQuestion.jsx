import React, { useState } from 'react';
import styled from 'styled-components';

const CategoricQuestion = ({ question, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e);
  };

  return (
    <StyledCategoricQuestion>
      <p>{question}</p>
      <StyledOptions>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name={`option-${question}`}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </StyledOptions>
    </StyledCategoricQuestion>
  );
};

const StyledCategoricQuestion = styled.div`
  p {
    margin-bottom: 10px;
  }
`;

const StyledOptions = styled.div`
  display: flex;
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
`;

export default CategoricQuestion;
