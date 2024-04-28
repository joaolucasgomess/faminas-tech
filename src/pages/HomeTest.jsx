import { React, useState } from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import styled from 'styled-components';
import { Button, Modal, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import banheiro from '../assets/banheiro.png';
import { ButtonTable } from '../components/Button/ButtonTable.jsx';

export const HomeTest = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <ContainerPai>
            <Cabecalho>
                <h1>Mapa das Mesas</h1>
            </Cabecalho>
            
            <Mapa>
                <DivAcimaMesa>        
                    <DivEsquerdaAcimaMesa>
                        <EsquerdaAcimaMesa1/>
                        <EsquerdaAcimaMesa2>
                            <h1>Entrada/Saída</h1>
                        </EsquerdaAcimaMesa2>
                    </DivEsquerdaAcimaMesa>
            
                    <AcimaMesa/>
                </DivAcimaMesa>

                <DivParedeBanheiroMesas>
                    <Parede/>
                    <Banheiro>
                        <IconToilet src={banheiro} alt="Icone de banheiro" />
                    </Banheiro>
                    <Mesas>
                        <ButtonTable onClick={handleOpenModal} text="Mesa 1"/>
                        <TestDiv>
                            <ButtonTable onClick={handleOpenModal} text="Mesa 2"/>
                            <ButtonTable onClick={handleOpenModal} text="Mesa 3"/>
                            <ButtonTable onClick={handleOpenModal} text="Mesa 4"/>
                        </TestDiv>
                        <ButtonTable onClick={handleOpenModal} text="Mesa 5"/>

                        <Modal open={openModal}>
                            <StyledModal
                                open={openModal}
                                onClose={handleCloseModal}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <StyledContentModal>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Projeto 1
                                    </Typography>

                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Este é o projeto 1
                                    </Typography>

                                    <a target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon sx={{ fontSize: 40, color: '#000', cursor: 'pointer' }} />
                                    </a>

                                    <Button variant="contained">MARCAR COMO VISTO</Button>
                                </StyledContentModal>
                            </StyledModal>
                        </Modal>
                    </Mesas>
                </DivParedeBanheiroMesas>
            </Mapa>

            <StyledFooterContainer>
                <NavBar/>
            </StyledFooterContainer>
        </ContainerPai>
    );
}

const TestDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 10%;
`

const IconToilet = styled.img`
    width: 40%;
    height: 50%;
`

const StyledModal = styled(Modal)`
    & .MuiBackdrop-root {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
    }
`;

const StyledContentModal = styled.div`
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
    max-width: 50rem;
    border: '2px solid #000';
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem;
`

const Mapa = styled.div`
    display: flex;
    flex-direction: column;
`

const DivAcimaMesa = styled.div`
   display: flex;
   align-items: flex-end;
`

const DivEsquerdaAcimaMesa = styled.div`
    margin-top: 2%;
`

const EsquerdaAcimaMesa1 = styled.div`
    height: 30vh;
    width: 20vw;
    border: 0.5rem solid #ECEFF1;
    border-top: none;
    border-left: none;
`

const EsquerdaAcimaMesa2 = styled.div`
    background-color: #D3D3D3;
    color: #333333;
    height: 20vh;
    width: 20vw;
    border: 0.5rem solid #ECEFF1;
    border-right: none;
    border-top: none;
    border-bottom: none;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
`

const AcimaMesa = styled.div`
    background-color: #D3D3D3;
    height: 50vh;
    width: 70vw;
    border: 0.5rem solid #ECEFF1;
    border-bottom: none;
    border-left: none;
`

const DivParedeBanheiroMesas = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Parede = styled.div`
    height: 30vh;
    width: 25vw;
    border-top: 0.5rem solid #ECEFF1;
`

const Banheiro = styled.main`
    background-color: #6495ED;
    height: 30vh;
    width: 20vw;
    border: 0.5rem solid #ECEFF1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Mesas = styled.div`
    background-color: #D3D3D3;
    height: 30vh;
    width: 45vw;
    border: 0.5rem solid #ECEFF1;
    border-left: none;
    border-top: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ContainerPai = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    
`

const Cabecalho = styled.header`
    color: #F6F6F6;
    font-size: 1.5rem;
`;

const StyledFooterContainer = styled.footer`
    position: fixed;
    bottom: 0%;
    width: 100vw;
`;