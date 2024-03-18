import React, { useState } from 'react';
import { projects } from '../db/db';
import { useProtectedPage } from '../hooks/useProtectedPage';
import styled from 'styled-components';
import { buttonBaseClasses, Modal, Box, Typography, Button } from '@mui/material';
import { NavBar } from '../components/NavBar/NavBar';
import ProfileButton from '../components/ProfileOptions/ProfileButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [markedProjects, setMarkedProjects] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [newProject, setNewProject] = useState({
        name: '',
        description: '',
        link: '',
        idAluno: 1,
        table: ''
    });
    const [occupiedTables, setOccupiedTables] = useState([]);
    const sortedProjects = projects.slice().sort((a, b) => a.table - b.table);

    const getAvailableTables = () => {
        const allTables = Array.from({ length: 30 }, (_, i) => i + 1);
        const availableTables = allTables.filter(table => !occupiedTables.includes(table));
        return availableTables;
    };

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setOpenModal(false);
    };

    const getToken = () => {
        const role = localStorage.getItem('token');
        console.log(role);
        return role;
    };

    const handleCheckboxClick = (e, projectId) => {
        e.stopPropagation();
        if (e.target.checked) {
            setMarkedProjects([...markedProjects, projectId]);
        } else {
            setMarkedProjects(markedProjects.filter(id => id !== projectId));
        }
    };

    const handleMarkAsSeen = () => {
        if (selectedProject) {
            if (markedProjects.includes(selectedProject.id)) {
                setMarkedProjects(markedProjects.filter(id => id !== selectedProject.id));
            } else {
                setMarkedProjects([...markedProjects, selectedProject.id]);
            }
        }
    };

    const handleAddProjectClick = () => {
        setIsFormOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({
            ...newProject,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        projects.push({ ...newProject, id: projects.length + 1 });
        setOccupiedTables([...occupiedTables, parseInt(newProject.table)]);
        setIsFormOpen(false);
        setNewProject({ name: '', description: '', link: '', idAluno: 1, table: '' });
    };

    const handleBackdropClick = () => {
        setIsFormOpen(false);
    };

    return (
        <StyledMainContainer>
            <Titulo>
                <h1>Mesas</h1>
            </Titulo>

            <ProfileButtonWrapper>
                <ProfileButton />
            </ProfileButtonWrapper>
            {sortedProjects.map((project) => (
                <StyledProjectContainer
                    key={project.id}
                    onClick={() => handleOpenModal(project)}
                    marked={markedProjects.includes(project.id)}
                >
                    <StyledHeaderContainer>
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            onClick={(e) => handleCheckboxClick(e, project.id)}
                        />
                        <h2>{project.table}</h2>
                    </StyledHeaderContainer>
                </StyledProjectContainer>
            ))}

            {getToken() === 'aluno' && (
                <>
                    <StyledAddProjectButton onClick={handleAddProjectClick}>+</StyledAddProjectButton>
                    {isFormOpen && (
                        <StyledBackdrop onClick={handleBackdropClick}>
                            <StyledFormContainer onClick={(e) => e.stopPropagation()}>
                                <StyledForm onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nome do Projeto"
                                        value={newProject.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <textarea
                                        name="description"
                                        placeholder="Descrição do Projeto"
                                        value={newProject.description}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="link"
                                        placeholder="Link do Projeto"
                                        value={newProject.link}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <select
                                        name="table"
                                        value={newProject.table}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Selecione uma mesa</option>
                                        {getAvailableTables().map(table => (
                                            <option key={table} value={table}>Mesa {table}</option>
                                        ))}
                                    </select>
                                    <Button type="submit">Adicionar Projeto</Button>
                                </StyledForm>
                            </StyledFormContainer>
                        </StyledBackdrop>
                    )}
                </>
            )}

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledModal
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
                        <a href={selectedProject && selectedProject.link} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon sx={{ fontSize: 40, color: '#000', cursor: 'pointer' }} />
                        </a>
                        <Button
                            onClick={handleMarkAsSeen}
                            variant="contained"
                            sx={{ mt: 2, backgroundColor: markedProjects.includes(selectedProject?.id) ? '#FF0000' : undefined }}
                        >
                            {markedProjects.includes(selectedProject?.id) ? 'Desmarcar como visto' : 'Marcar como visto'}
                        </Button>
                    </StyledModalContent>
                </StyledModal>
            </Modal>
            <StyledFooterContainer>
                <NavBar />
            </StyledFooterContainer>
        </StyledMainContainer>
    );
};


const ProfileButtonWrapper = styled.div`
    display: inline-block;
    position: fixed;
    background-color: #1F1A50;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 999;
`;
const StyledModalContent = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 80%;
    max-width: 800px;
    border: '2px solid #000';
    padding: 16px;
    text-align: center;
    border-radius: 8px;
`;

const StyledMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* Permitir que os cards quebrem para a próxima linha */
    justify-content: center;
    gap: 10px;
    align-items: flex-start; /* Alinhar os cards no topo */
    margin-top: 20%;
    margin-bottom: 130px;
`;
const Titulo = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    width: 100%; /* Ocupar toda a largura da página */
    margin-bottom: 10% /* Espaçamento superior */
`;

const StyledProjectContainer = styled.div`
    background-color: ${({ marked }) => (marked ? '#00ad066c' : '#ffffff36')};
    display: flex;
    flex-direction: column;
    color: white;
    border: solid 2px white;
    border-radius: 8px;
    width: 45%;
    margin-right: 5px;
    height: 150px;
    padding: 5px;
    position: relative;

    &:nth-child(2n) {
        margin-right: 0;
    }

    &:hover {
        cursor: pointer;
    }

    h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 52px;
        font-weight: bold;
    }
`;

const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;


    input {
        align-self: flex-start;
        transform: scale(1.6);
    }
`;



const StyledTableContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    margin-right: 10px;
`;
//Guedes
const StyledModalContent = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 80%;
    max-width: 800px;
    bgcolor: 'background.paper';
    border: '2px solid #000';
    boxShadow: 24;
    padding: 16px;
    text-align: center;
    border-radius: 8px;
`;
// main

const StyledModal = styled(Modal)`
    & .MuiBackdrop-root {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
    }
`;

const StyledFooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #1f1a50;
    color: white;
`;

const StyledAddProjectButton = styled.button`
    position: fixed;
    bottom: 70px;
    right: 20px;
    background-color: #0277d6dd;
    color: white;
    border: none;
    border-radius: 10px;
    width: 42px;
    height: 42px;
    font-size: 20px;
    cursor: pointer;
    z-index: 999;
`;

const StyledFormContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
        margin-bottom: 10px;
        padding: 5px;
        width: 300px;
    }

    button {
        background-color: #0277d6dd;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }
`;

const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;
