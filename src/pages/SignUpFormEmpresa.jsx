import React from 'react'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { singupCompany } from '../services/users'
import BackButton from '../components/Buttons/BackButton'

export const SignUpFormEmpresa = () => {
    const [form, onChange, clear] = useForm({ email: '', name: '', company: '', position: '', password: '' })
    const navigate = useNavigate()

    const onSubmitSingup = (e) => {
        e.preventDefault();
        singupCompany(form, navigate);
    };

    return (
        <div>
            <BackButton />
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

    h1{
        color: white;
        font-size: 50px;
        font-weight: 600;
    }
`

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    input{
        background-color: #ffffff36;    
        border-radius: 50px;
        padding: 12px;
        border: solid 2px white;
        color: white;
        height: 55px;
        width: 278px;
        margin-top: 20px;
    }
    input::placeholder{
        color: white;
    }
    input:focus{
        outline: none;
    }
`

export const StyledMainContainer = styled.div`

`
const CustomButton = styled.button`
    background-color: #1F1A50;    
    border-radius: 50px;
    padding: 12px 70px 12px 70px;
    border: solid 2px white;
    color: white;
    margin-top: 5%;
    margin-bottom: 10px;

    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #140f33;
    }
`;
