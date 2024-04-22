import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { projects } from '../../db/db';
import { colors } from '../../constants/colors';

const AddProjectForm = ({ isFormOpen, setIsFormOpen }) => {
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    link: '',
    idAluno: 1,
    table: ''
  });
  const [occupiedTables, setOccupiedTables] = useState([]);
  const sortedProjects = projects.slice().sort((a, b) => a.table - b.table);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value
    });
  };

  const getAvailableTables = () => {
    const allTables = Array.from({ length: 30 }, (_, i) => i + 1);
    const availableTables = allTables.filter(table => !occupiedTables.includes(table));
    return availableTables;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProjectWithId = { ...newProject, id: projects.length + 1 };
    projects.push(newProjectWithId);
    setOccupiedTables([...occupiedTables, parseInt(newProjectWithId.table)]);
    setIsFormOpen(false);
    setNewProject({ name: '', description: '', link: '', idAluno: 1, table: '' });
  };

  return (
    <>
      {isFormOpen && (
        <StyledBackdrop onClick={() => setIsFormOpen(false)}>
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
              <input
                type="text"
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
  );
};

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
        background-color: ${colors.lightBlue};
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

export default AddProjectForm;
