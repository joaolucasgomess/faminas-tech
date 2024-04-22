import React, { useEffect } from 'react';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router';
import { login } from '../services/users';
import styled from 'styled-components';
import BackButton from '../components/Buttons/BackButton';
import { colors } from '../constants/colors';
import LogoFaminas from '../assets/logo-faminas-white2.png'

export const LoginPage = () => {
    const [form, onChange] = useForm({ email: '', password: '' });
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
    }, []);

    const handleEmailChange = (e) => {
        onChange(e);
    };

    const handlePasswordChange = (e) => {
        onChange(e);
    };

    const onSubmitLogin = (e) => {
        e.preventDefault();
        login(form, navigate);
    };

    return (
        <div>
            <ContainerBackButton>
                <BackButton />
            </ContainerBackButton>

            <StyledFormContainer>
                <Logo src={LogoFaminas} alt="Logo" />
                <StyledForm onSubmit={onSubmitLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleEmailChange}
                        required={true}
                        value={form.email}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={handlePasswordChange}
                        required={true}
                        value={form.password}
                    />
                    <button type="submit">Entrar</button>
                </StyledForm>
            </StyledFormContainer>
        </div>
    );
};


export const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40%;
    gap: 4rem;

    h1 {
        color: white;
        font-size: 50px;
        font-weight: bold;
    }
`;
const Logo = styled.img`
    max-width: 90%;
    max-height: 100%;
    margin-bottom: 10%;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    input {
        background-color: ${colors.transparent};
        border-radius: 50px;
        padding: 12px;
        border: solid 3px ${colors.midBlue};
        color: ${colors.midBlue};
        font-size: 15px;
        height: 55px;
        width: 278px;
        text-indent: 5%;
    }

    ::placeholder {
        color: ${colors.midBlue};
    }

    input:focus {
        outline: solid 2px ${colors.lightBlue};
        border: solid 3px ${colors.midBlue}
    }

    button {
        background-color: ${colors.midBlue};
        border-radius: 50px;
        padding: 12px;
        border: solid 2px white;
        color: ${colors.white};
        height: 55px;
        width: 212px;
        font-size: 15px;
        font-weight: bold;
        margin-top: 10% ;
    }
`;

export const ContainerBackButton = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
`
