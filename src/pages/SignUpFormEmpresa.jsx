import React from 'react'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { singupCompany } from '../services/users'
import BackButton from '../components/Buttons/BackButton'
import { colors } from '../constants/colors'
import LogoFaminas from '../assets/logo-faminas-white2.png'

export const SignUpFormEmpresa = () => {
    const [form, onChange, clear] = useForm({ email: '', name: '', company: '', position: '', password: '' })
    const navigate = useNavigate()

    const onSubmitSingup = (e) => {
        e.preventDefault();
        singupCompany(form, navigate);
    };

    return (
        <div>
            <ContainerBackButton>
                <BackButton />
            </ContainerBackButton>
                <Logo src={LogoFaminas} alt="Logo" />
            <StyledMainContainer>
                <StyledFormContainer>
                    <StyledForm>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            onChange={onChange}
                            required="true"
                            value={form.email}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            onChange={onChange}
                            required="true"
                            value={form.name}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Empresa"
                            onChange={onChange}
                            required="true"
                            value={form.company}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                            required="true"
                            value={form.password}
                        />
                        <input
                            type="text"
                            name="position"
                            placeholder="Cargo"
                            onChange={onChange}
                            required="true"
                            value={form.position}
                        />
                    </StyledForm>
                    <CustomButton type="submit" onClick={onSubmitSingup}>Finalizar Cadastro</CustomButton>
                </StyledFormContainer>
            </StyledMainContainer>
        </div>
    )
}

export const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40%;

    h1{
        color: white;
        font-size: 50px;
        font-weight: 600;
    }
`
const ContainerBackButton = styled.div`
    position: absolute;
    align-items: center;
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
        border: solid 3px ${colors.midBlue}
    }
`

export const StyledMainContainer = styled.div`

`
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
const Logo = styled.img`
    position: absolute;
    top: 4%;
    left:25%;
    max-width: 50%;
    max-height: 100%;
`;
