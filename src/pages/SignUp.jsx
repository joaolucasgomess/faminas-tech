import React from 'react';
import { goToSignUpAluno, goToSignUpEmpresa } from '../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../components/Buttons/BackButton';
import LogoFaminas from '../assets/logo-faminas-white2.png'
import { colors } from '../constants/colors';

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
            <ContainerBackButton>
                <BackButton />
            </ContainerBackButton>
            <SignUpContainer>
                <Logo src={LogoFaminas} alt="Logo" />
                <h2>Como deseja se cadastrar?</h2>
                <StyledButtons>
                    <CustomButton onClick={handleClickAluno}>Estudante</CustomButton>
                    <CustomButton onClick={handleClickEmpresa}>Visitante</CustomButton>
                </StyledButtons>
            </SignUpContainer>
        </div>
    );
};

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 30px;
    
    h2{
        color: ${colors.midBlue};
        max-width: 80%;
        font-size: 120%;
    }
`;

const StyledButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    button {
        width: 10rem; /* Defina o tamanho desejado para os botões */
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 12% 80% 12% 80%;
        font-size: 100%;
        font-weight: bold;
    }
`;

const ContainerBackButton = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
`

const CustomButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.midBlue};    
    border-radius: 100px;
    border: solid 2px white;
    color: white;

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
