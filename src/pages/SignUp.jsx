import React from 'react';
import { goToSignUpAluno, goToSignUpEmpresa } from '../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../components/Buttons/BackButton';

export const SignUp = () => {
    const navigate = useNavigate();

    function handleClickAluno() {
        goToSignUpAluno(navigate);
    }

    function handleClickEmpresa() {
        goToSignUpEmpresa(navigate);
    }

    return (
        <div>
            <BackButton />
            <SignUpContainer>
                <Logo src="https://pbs.twimg.com/profile_images/1387372296533385217/viWdVTJg_400x400.jpg" alt="Logo" />
                <h2>Selecione o seu tipo de cadastro</h2>
                <StyledButtons>
                    <CustomButton onClick={handleClickAluno}><h2>Estudante</h2></CustomButton>
                    <CustomButton onClick={handleClickEmpresa}><h2>Visitante</h2></CustomButton>
                </StyledButtons>
            </SignUpContainer>
        </div>
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
    background-color: #ffffff1d;
    margin-top: 20px;
    padding: 60px 30px 60px 30px ;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    border: solid 2px white;

`;

const Logo = styled.img`
    width: auto;
    max-height: 180px; /* Definindo a altura máxima */
    margin-top: 40px;
`;
