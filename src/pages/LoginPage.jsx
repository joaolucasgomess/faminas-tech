import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router';
import { login } from '../services/users';
import { useEffect } from 'react';
import styled from 'styled-components';
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri';

export const LoginPage = () => {
    const [form, onChange, clear] = useForm({ email: '', password: '' });
    const [showEmailIcon, setShowEmailIcon] = useState(true);
    const [showPasswordIcon, setShowPasswordIcon] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
    }, []);

    const handleEmailChange = (e) => {
        onChange(e);
        setShowEmailIcon(e.target.value === '');
    };

    const handlePasswordChange = (e) => {
        onChange(e);
        setShowPasswordIcon(e.target.value === '');
    };

    const onSubmitLogin = (e) => {
        e.preventDefault();
        login(form, navigate);
    };

    return (
        <StyledMainContainer>
            <StyledFormContainer> 
                <h1>LOGIN</h1>
                <StyledForm>
                    <div>
                        {showEmailIcon && <EmailIcon />}
                        <input 
                            type="email" 
                            name="email"
                            placeholder="E-mail"
                            onChange={handleEmailChange}
                            required={true}
                            value={form.email} 
                        />
                    </div>

                    <div>
                        {showPasswordIcon && <PasswordIcon />}
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Senha"
                            onChange={handlePasswordChange}
                            required={true}
                            value={form.password}
                        />
                    </div>
                    <button type="submit" onClick={onSubmitLogin}>Entrar</button>                    
                </StyledForm>
            </StyledFormContainer>
        </StyledMainContainer>
    );
};

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
        transform: translateX(30px);
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
const EmailIcon = styled(RiMailLine)`
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(85%);
    color: white;
    pointer-events: none;
`;

const PasswordIcon = styled(RiLockPasswordLine)`
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(550%);
    color: white;
    pointer-events: none;
`;