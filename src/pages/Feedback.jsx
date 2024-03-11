import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import styled from 'styled-components'

export const FeedBack = () => {
    return(
        <>
            <p>PÁGINA FEEDBACK</p>
            <StyledFooterContainer>
                <NavBar/>
            </StyledFooterContainer>
        </>
    )
}

const StyledFooterContainer = styled.footer`
    position: fixed; /* Define a posição fixa */
    bottom: 0; /* Fixa no rodapé */
    width: 100%; /* Define a largura total */
    background-color: #1F1A50; /* Cor de fundo da barra de navegação */
    color: white; /* Cor do texto */
`;