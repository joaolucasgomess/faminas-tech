import React from 'react';
import { goToLoginPage, goToSignUpPage } from '../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../constants/colors'
import LogoFaminas from '../assets/logo-faminas-white2.png'



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
            <Logo src={LogoFaminas} alt="Logo" />
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
`

export const StyledButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    button {
        width: 150px; /* Defina o tamanho desejado para os botões */
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        padding: 12% 80% 12% 80%;
    }
`;


const CustomButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.midBlue};    
    border-radius: 100px;
    border: none;
    color: ${colors.white};
    font-weight: bold;
    font-size: 18px;

    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #140f33;
    }
`;

const Logo = styled.img`
    max-width: 90%;
    max-height: 100%;
    margin-top: 40%;
    margin-bottom: 30%;
`;
