import React from 'react'
import { projects } from '../db/db'
import {  useProtectedPage } from '../hooks/useProtectedPage'
import styled from 'styled-components'
import { buttonBaseClasses } from '@mui/material'

export const Home = () => {
    useProtectedPage()

    const getToken = () => {
        const role = localStorage.getItem('token')
        console.log(role)
        return role
    }

    return (
        <StyledMainContainer>  
            {
                projects.map((project) => (
                    <StyledProjectContainer key={project.id}>
                        <StyledHeaderContainer>
                            <h2>{project.name}</h2>
                            <input type="checkbox" name="" id="" />
                        </StyledHeaderContainer>
                        <p>{project.description}</p>
                        <p>{project.link}</p>
                        <StyledTableContainer>
                            <p>Mesa {project.table}</p>   
                        </StyledTableContainer>
                    </StyledProjectContainer>
                )) 
            }
            {getToken() === 'aluno' ? <button>Adicionar Projeto</button> : <></>}   
            
        </StyledMainContainer>
    )
}

export const StyledProjectContainer = styled.div`
    background-color: #ffffff36;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 20px;
    border: solid 2px white;
    border-radius: 8px;
    width: 325px;
    height: 150px;
    padding: 5px;
    h1,p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

export const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

export const StyledTableContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    margin-right: 10px;
`