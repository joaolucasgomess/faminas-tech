import React from 'react'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router'
import { login } from '../services/users'
import { useEffect } from 'react'
import styled from 'styled-components'

export const LoginPage = () => {
    const [ form, onChange, clear ] = useForm({ email: '', password: '' })
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    const onSubmitLogin = (e) => {
        e.preventDefault()
        login(form, navigate)
    }

    return(
        <StyledMainContainer>
            <StyledFormContainer> 
                <h1>LOGIN</h1>
                <StyledForm>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="E-mail"
                        onChange={onChange}
                        required={true}
                        value={form.email} 
                    />

                    <input 
                        type="password" 
                        name="password"
                        placeholder="Senha"
                        onChange={onChange}
                        required={true}
                        value={form.password}
                    />
                    <button type="submit" onClick={onSubmitLogin}>Entrar</button>                    
                </StyledForm>
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
    ::placeholder{
        color: white;
    }
    input:focus{
        outline: none;
    }
    button{
        background-color: #1F1A50;    
        border-radius: 50px;
        padding: 12px;
        border: solid 2px white;
        color: white;
        height: 55px;
        width: 212px;
        margin-top: 70px;
    }
`

export const StyledMainContainer = styled.div`
    margin-top: 150px;
`