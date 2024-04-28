import React from 'react';
import styled from 'styled-components';

export const ButtonTable = (props) => {
    return(
        <ButtonTableStyle onClick={props.onClick}>{props.text}</ButtonTableStyle>
    );
}

const ButtonTableStyle = styled.button`
    background-color: #8B4513;
    width: 20%;
    height: 20%;
    border: 10%;
    border-color: #FFFFFF;
    border-radius: 8px;
    font-size: 100%;
    font-weight: bold;
    color: #fff;
    &:hover {
        cursor: pointer;
        background-color: #A0522D;
    }
`