import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar/NavBar';

export const FeedBack = () => {
    return (
        <>
            <StyledMain>
                <StyledParagraph>Lorem ipsum dolor sit amet consectetur. Aliquam etiam cursus magna sed habitant amet tempor.</StyledParagraph>
                <StyledDivCheck>
                    <StyledCheck type="checkbox" />
                    <StyledCheck type="checkbox" />
                    <StyledCheck type="checkbox" />
                    <StyledCheck type="checkbox" />
                    <StyledCheck type="checkbox" />
                </StyledDivCheck>
                <StyledParagraph>Lorem iStyledParagraphsum dolor sit amet consectetur. Est dictum StyledParagraphraesent ultrices id sollicitudin ut. Dictum congue cras consequat amet egestas blandit.</StyledParagraph>
                <StyledInput />
                <StyledParagraph>Lorem ipsum dolor sit amet consectetur.</StyledParagraph>
                <StyledInput />
                <StyledParagraph>Lorem ipsum dolor sit amet consectetur. Ullamcorper tortor consectetur nibh.</StyledParagraph>
                <StyledInput />
                <StyledButton>Enviar feedback</StyledButton>
            </StyledMain>
            <StyledFooterContainer>
                <NavBar/>
            </StyledFooterContainer>
        </>    
    )
}

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 24px;
    align-items: center;
    color: #FFFFFF;
    flex-grow: 1;

    @media screen and (min-width: 768px) {
        padding: 50px;
    }

    @media screen and (min-width: 1024px) {
        padding: 100px;
        font-size: 28px;
    }
`

const StyledDivCheck = styled.div`
    display: flex;
    gap: 10px;
`

const StyledCheck = styled.input`
    width: 3em;
    height: 3em;
    cursor: pointer;
    appearance: none;
    border: 0.25em solid #FFFFFF;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.36);
`

const StyledParagraph = styled.p`
    @media screen and (min-width: 1024px) {
        max-width: 45%;
    }
`

const StyledInput = styled.input`
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.36);
    border: 2px solid #FFFFFF;
    border-radius: 60px;
    width: 100%;
    padding: 10px;
    font-size: 20px;

    @media screen and (min-width: 768px) {
        width: 50%;
    }

    @media screen and (min-width: 1024px) {
        max-width: 50%;
        height: 60px;
    }
`

const StyledButton = styled.button`
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0);
    border: 2px solid #FFFFFF;
    border-radius: 60px;
    width: 100%;
    padding: 10px;
    font-size: 20px;

    @media screen and (min-width: 280px) {
        width: 50%;
    }

    @media screen and (min-width: 360px) {
        width: 35%;
    }

    @media screen and (min-width: 768px) {
        width: 25%;
    }

    @media screen and (min-width: 1024px) {
        width: 12%;
        height: 60px;
    }
`

const StyledFooterContainer = styled.footer`
    bottom: 0;
    width: 100%;
    background-color: #1F1A50;
    color: white;
`;

export default FeedBack
