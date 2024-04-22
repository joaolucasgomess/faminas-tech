import React from 'react'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { singupStudent } from '../services/users'
import BackButton from '../components/Buttons/BackButton'
import { colors } from '../constants/colors'
import LogoFaminas from '../assets/logo-faminas-white2.png'

export const SignUpFormEstudante = () => {
    const [form, onChange, clear] = useForm({ email: '', name: '', password: '', matricula: '' }) // Campos de formulário
    const navigate = useNavigate()

    const onSubmitSignup = (e) => {
        e.preventDefault();
        singupStudent(form, navigate); // Chame a função de cadastro de estudante
    };

    return (
        <StyledMainContainer>
            <ContainerBackButton>
            <BackButton/>
            </ContainerBackButton>
                <Logo src={LogoFaminas} alt="Logo" />
            <StyledFormContainer>
                <StyledForm>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={onChange}
                        required
                        value={form.email}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        onChange={onChange}
                        required
                        value={form.name}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={onChange}
                        required
                        value={form.password}
                    />
                    <input
                        type="text"
                        name="matricula"
                        placeholder="Matrícula"
                        onChange={onChange}
                        required
                        value={form.enrollment}
                    />
                </StyledForm>
                <CustomButton type="submit" onClick={onSubmitSignup}>Finalizar Cadastro</CustomButton>
            </StyledFormContainer>
        </StyledMainContainer>
    )
}

export const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContainerBackButton = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
`
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${colors.midBlue};
    font-size: 15px;
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
        border: solid 3px ${colors.midBlue};
    }
`

export const StyledMainContainer = styled.div`
 margin-top: 40%;
`
const Logo = styled.img`
    position: absolute;
    top: 4%;
    left:25%;
    max-width: 50%;
    max-height: 100%;
`;

const CustomButton = styled.button`
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
`;
