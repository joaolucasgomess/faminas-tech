import React from 'react'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { singupStudent } from '../services/users' // Importe a função de cadastro de estudante do seu serviço

export const SignUpFormEstudante = () => {
    const [form, onChange, clear] = useForm({ email: '', name: '', password: '', enrollment: '' }) // Campos de formulário
    const navigate = useNavigate()

    const onSubmitSignup = (e) => {
        e.preventDefault();
        singupStudent(form, navigate); // Chame a função de cadastro de estudante
    };

    return (
        <StyledMainContainer>
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
                        name="enrollment"
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

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    input {
        background-color: #ffffff36;    
        border-radius: 50px;
        padding: 12px;
        border: solid 2px white;
        color: white;
        height: 55px;
        width: 278px;
        margin-top: 20px;
    }

    input::placeholder {
        color: white;
    }

    input:focus {
        outline: none;
    }
`

export const StyledMainContainer = styled.div`
    margin-top: 150px;
`

const CustomButton = styled.button`
    background-color: #1F1A50;    
    border-radius: 50px;
    padding: 12px 70px;
    border: solid 2px white;
    color: white;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #140f33;
    }
`;
