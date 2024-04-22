import React from "react";
import styled from 'styled-components'
import Button from '@mui/material/Button';



export function StyledButton(props) {
    const { onClick, text } = props;

    return (
        <Button onClick={onClick} >{text} </Button>
    );
}


