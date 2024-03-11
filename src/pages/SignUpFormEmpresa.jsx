import React from 'react'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router'
import styled from 'styled-components'


export const SignUpFormEmpresa = () => {
    const [form, onChange, clear] = useForm({ email: '', name: '', empresa: '', cargo: '', password: '' })

    return (
        <StyledMainContainer>
            <StyledFormContainer>
                <StyledForm>
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={onChange}
                    required="true"
                    value={form.email}
                />
                <input
                    type="text"
                    placeholder="Nome"
                    onChange={onChange}
                    required="true"
                    value={form.name}
                />
                <input
                    type="text"
                    placeholder="Empresa"
                    onChange={onChange}
                    required="true"
                    value={form.empresa}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={onChange}
                    required="true"
                    value={form.password}
                />
                <input
                    type="text"
                    placeholder="Cargo"
                    onChange={onChange}
                    required="true"
                    value={form.cargo}
                />
                </StyledForm>
                <CustomButton>Finalizar Cadastro</CustomButton>
            </StyledFormContainer>
        </StyledMainContainer>
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
    margin-top: 150px;
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