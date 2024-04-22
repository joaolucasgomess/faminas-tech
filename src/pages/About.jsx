import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar/NavBar';

export const About = () => {
    return (
        <>
            <StyledMain>
                <StyledExplanation>
                    <h2>Bem-vindo ao nosso aplicativo de evento!</h2>
                    <ul>
                        <li>
                            <h3>Explorar as Mesas de Projeto:</h3>
                            <p>Visualize uma lista completa de todas as mesas disponíveis no evento, com informações detalhadas sobre cada projeto apresentado. Saiba mais sobre os participantes, o conteúdo do projeto e suas áreas de interesse.</p>
                        </li>
                        <li>
                            <h3>Rastrear sua Visitação:</h3>
                            <p>Marque as mesas de projeto que você já visitou e mantenha o controle de quais ainda deseja explorar. Nosso aplicativo mantém você atualizado e organizado durante todo o evento.</p>
                        </li>
                        <li>
                            <h3>Fornecer Feedback Importante:</h3>
                            <p>Sua opinião é fundamental para nós! Oferecemos um recurso de feedback integrado, onde você pode compartilhar suas impressões sobre o evento. Nosso objetivo é melhorar continuamente e oferecer uma experiência ainda melhor para nossos participantes.</p>
                        </li>
                        <li>
                            <h3>Acessar Informações Detalhadas:</h3>
                            <p>Ao clicar em uma mesa de projeto específica, você terá acesso a informações detalhadas sobre o projeto apresentado. Saiba mais sobre os participantes, o conteúdo do projeto, as tecnologias utilizadas e muito mais.</p>
                        </li>
                    </ul>
                    <p>Esperamos que você aproveite o nosso aplicativo e tenha uma experiência enriquecedora durante o evento. Obrigado por nos acompanhar!</p>
                </StyledExplanation>
            </StyledMain>

            <NavBar />

        </>
    )
}

const StyledMain = styled.div`
    background-color: #D9D9D9;
    width: 80%;
    display: flex;
    padding: 10%;
    margin: 3% auto;
    border-radius: 6px;
    overflow: auto;
    flex-grow: 1;
    margin-bottom: 20%; /* Adiciona margem inferior para não sobrepor a navbar fixa no footer */
`;

const StyledExplanation = styled.div`
    font-size: 1.25em; /* Ajusta o tamanho da fonte */
    line-height: 1.5; /* Espaçamento entre linhas */

    h2 {
        margin-bottom: 1rem;
    }

    h3 {
        margin-bottom: 0.5rem;
    }

    p {
        margin-bottom: 1rem;
    }
`;

export default About;
