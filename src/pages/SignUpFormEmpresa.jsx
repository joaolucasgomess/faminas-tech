import React from 'react';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export const SignUpFormEmpresa = () => {
    const [form, onChange, clear] = useForm({
        email: '',
        name: '',
        empresa: '',
        cargo: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        onChange(e);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário enviado:', form);
        // Adicione aqui a lógica para enviar o formulário para a API
    };

    return (
        <StyledMainContainer>
            <StyledFormContainer>
                <StyledForm onSubmit={onSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        value={form.email}
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        onChange={handleChange}
                        value={form.name}
                        required
                    />
                    <input
                        type="text"
                        name="empresa"
                        placeholder="Empresa"
                        onChange={handleChange}
                        value={form.empresa}
                        required
                    />
                    <input
                        type="text"
                        name="cargo"
                        placeholder="Cargo"
                        onChange={handleChange}
                        value={form.cargo}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={handleChange}
                        value={form.password}
                        required
                    />
                    <CustomButton type="submit">Finalizar Cadastro</CustomButton>
                </StyledForm>
            </StyledFormContainer>
        </StyledMainContainer>
    );
};

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: white;
        font-size: 50px;
        font-weight: 600;
    }
`;

const StyledForm = styled.form`
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
`;

const StyledMainContainer = styled.div`
    margin-top: 150px;
`;

const CustomButton = styled.button`
    background-color: #1f1a50;
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

export default SignUpFormEmpresa;
