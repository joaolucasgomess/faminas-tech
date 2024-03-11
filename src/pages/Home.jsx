import React, { useState } from 'react'
import { projects } from '../db/db'
import { useProtectedPage } from '../hooks/useProtectedPage'
import styled from 'styled-components'
import { buttonBaseClasses, Modal, Box, Typography, Button } from '@mui/material'
import { NavBar } from '../components/NavBar/NavBar'


export const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setOpenModal(false);
    };
    const getToken = () => {
        const role = localStorage.getItem('token')
        console.log(role)
        return role
    }

    const handleCheckboxClick = (e) => {
        e.stopPropagation(); // Impede a propagação do evento de clique para os pais
    };

    return (
        <StyledMainContainer>
            {
                projects.map((project) => (
                    <StyledProjectContainer key={project.id} onClick={() => handleOpenModal(project)}>
                        <StyledHeaderContainer>
                            <h2>{project.name}</h2>
                            <input type="checkbox" name="" id="" onClick={handleCheckboxClick} />
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

            {/* Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledModalContent>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {selectedProject && selectedProject.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedProject && selectedProject.description}
                    </Typography>
                    <Button onClick={handleCloseModal} variant="contained" sx={{ mt: 2 }}>
                        Marcar como visto
                    </Button>
                </StyledModalContent>
            </Modal>
            <StyledFooterContainer>
                <NavBar/>
            </StyledFooterContainer>



        </StyledMainContainer>
    );
}

const StyledProjectContainer = styled.div`
    background-color: #ffffff36;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 20px;
    border: solid 2px white;
    border-radius: 8px;
    width: 85%;
    height: 150px;
    padding: 5px;
    h1,p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
    }
`

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    input{
        transform:  scale(1.6);
    }
`

const StyledTableContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    margin-right: 10px;
`

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const StyledModalContent = styled(Box)`
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%; /* Igual à largura do card */
    height: 70%;
    max-width: 800px; /* Ajuste o comprimento conforme necessário */
    bgcolor: 'background.paper';
    border: '2px solid #000';
    boxShadow: 24;
    padding: 16px;
    text-align: center;
    border-radius: 8px;
`;
const StyledFooterContainer = styled.footer`
    position: fixed; /* Define a posição fixa */
    bottom: 0; /* Fixa no rodapé */
    width: 100%; /* Define a largura total */
    background-color: #1F1A50; /* Cor de fundo da barra de navegação */
    color: white; /* Cor do texto */
`;