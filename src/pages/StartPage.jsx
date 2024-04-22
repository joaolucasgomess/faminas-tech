import React from 'react';
import { goToLoginPage, goToSignUpPage } from '../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import logoFaminas from '../assets/logoFaminas_400x400.jpg'

export const StartPage = () => {
    const navigate = useNavigate();

    function handleClickLogin() {
        goToLoginPage(navigate);
    }

    function handleClickSignUp() {
        goToSignUpPage(navigate);
    }

    return (
        <StartPageContainer>
            <Logo src="https://pbs.twimg.com/profile_images/1387372296533385217/viWdVTJg_400x400.jpg" alt="Logo" />
            <StyledButtons>
                <CustomButton onClick={handleClickLogin}>Login</CustomButton>
                <CustomButton onClick={handleClickSignUp}>Cadastre-se</CustomButton>
            </StyledButtons>
        </StartPageContainer>
    );
};

export const StartPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color: white;
    }
`

export const StyledButtons = styled.div`
    display: flex;
    flex-direction: column;
`

const CustomButton = styled.button`
    background-color: #1F1A50;    
    border-radius: 50px;
    padding: 12px 70px 12px 70px;
    border: solid 2px white;
    color: white;
    margin-bottom: 10px;

    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #140f33;
    }
`;

const Logo = styled.img`
    width: 300px;
    height: auto;
    margin-bottom: 50px;
    margin-top: 40px;
`;
