import React from 'react';
import { goToSignUpAluno, goToSignUpEmpresa } from '../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export const SignUp = () => {
    const navigate = useNavigate();

    function handleClickAluno() {
        // goToSignUpAluno(navigate);
    }

    function handleClickEmpresa() {
        goToSignUpEmpresa(navigate);
    }

    return (
        <SignUpContainer>
            <p>Selecione o seu tipo de cadastro</p>
            <StyledButtons>
                <CustomButton onClick={handleClickAluno}>Aluno</CustomButton>
                <CustomButton onClick={handleClickEmpresa}>Empresa</CustomButton>
            </StyledButtons>
        </SignUpContainer>
    );
};

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const StyledButtons = styled.div`
    display: flex;
    gap: 20px;
`;

const CustomButton = styled.button`
    background-color: #1F1A50;
    border-radius: 25px;
    padding: 12px 40px;
    color: white;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #140f33;
    }
`;
