import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar/NavBar';

export const FeedBack = () => {
    return (
        <>
            <StyledMain>
                <h1>FEEDBACK DO EVENTO</h1>
                <p>
                    Prezado participante,
                    Assim como sua presença é muito importante para a realização deste evento, sua opinião é
                    essencial ao aperfeiçoamento de nossos eventos futuros. Por isso, solicitamos o seu feedback!
                    Agradecemos a colaboração.
                </p>
                <div>
                    <p>Dados de caracterização</p>
                    <p>Categoria</p>

                    <StyledDivCategoria>
                        <SytledCheck type="checkbox" id="CategoriaProfissional" />
                        <label htmlFor="CategoriaProfissional">Profissional</label>
                        <SytledCheck type="checkbox" id="CategoriaEstudante" />
                        <label htmlFor="CategoriaEstudante">Estudante</label>
                    </StyledDivCategoria>
                </div>
                

                <p>Nas questões a seguir, assinale a resposta de acordo com a escala.</p>

                <div>
                    <p>1.Temática</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo1" />
                        <label htmlFor="otimo1">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom1" />
                        <label htmlFor="bom1">Bom</label>

                        <SytledCheck type="checkbox" id="regular1" />
                        <label htmlFor="regular1">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio1" />
                        <label htmlFor="naoSatisfatorio1">Não satisfatório</label>
                    </StyledDivCheck>
                
                
                    <p>2.Conteúdo</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo2" />
                        <label htmlFor="otimo2">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom2" />
                        <label htmlFor="bom2">Bom</label>

                        <SytledCheck type="checkbox" id="regular2" />
                        <label htmlFor="regular2">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio2" />
                        <label htmlFor="naoSatisfatorio2">Não satisfatório</label>
                    </StyledDivCheck>
                
                
                    <p>3.Data</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo3" />
                        <label htmlFor="otimo3">Ótimo</label>
                        
                        <SytledCheck type="checkbox" id="bom3" />
                        <label htmlFor="bom3">Bom</label>
                        
                        <SytledCheck type="checkbox" id="regular3" />
                        <label htmlFor="regular3">Regular</label>
                        
                        <SytledCheck type="checkbox" id="naoSatisfatorio3" />
                        <label htmlFor="naoSatisfatorio3">Não satisfatório</label>
                    </StyledDivCheck>
                
                
                    <p>4.Horário</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo4" />
                        <label htmlFor="otimo4">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom4" />
                        <label htmlFor="bom4">Bom</label>

                        <SytledCheck type="checkbox" id="regular4" />
                        <label htmlFor="regular4">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio4" />
                        <label htmlFor="naoSatisfatorio4">Não satisfatório</label>
                    </StyledDivCheck>
                
                
                    <p>5.Duração</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo5" />
                        <label htmlFor="otimo5">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom5" />
                        <label htmlFor="bom5">Bom</label>

                        <SytledCheck type="checkbox" id="regular5" />
                        <label htmlFor="regular5">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio5" />
                        <label htmlFor="naoSatisfatorio5">Não satisfatório</label>
                    </StyledDivCheck>
                
                
                    <p>6.Local</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo6" />
                        <label htmlFor="otimo6">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom6" />
                        <label htmlFor="bom6">Bom</label>

                        <SytledCheck type="checkbox" id="regular6" />
                        <label htmlFor="regular6">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio6" />
                        <label htmlFor="naoSatisfatorio6">Não satisfatório</label>    
                    </StyledDivCheck>
                
                
                    <p>7.Forma de Apresentação dos Projetos</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo7" />
                        <label htmlFor="otimo7">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom7" />
                        <label htmlFor="bom7">Bom</label>

                        <SytledCheck type="checkbox" id="regular7" />
                        <label htmlFor="regular7">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio7" />
                        <label htmlFor="naoSatisfatorio7">Não satisfatório</label>
                    </StyledDivCheck>
                
                
                    <p>8.Recepção</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo8" />
                        <label htmlFor="otimo8">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom8" />
                        <label htmlFor="bom8">Bom</label>

                        <SytledCheck type="checkbox" id="regular8" />
                        <label htmlFor="regular8">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio8" />
                        <label htmlFor="naoSatisfatorio8">Não satisfatório</label>
                    </StyledDivCheck>
                
                
                    <p>9.Divulgação</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo9" />
                        <label htmlFor="otimo9">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom9" />
                        <label htmlFor="bom9">Bom</label>

                        <SytledCheck type="checkbox" id="regular9" />
                        <label htmlFor="regular9">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio9" />
                        <label htmlFor="naoSatisfatorio9">Não satisfatório</label>
                    </StyledDivCheck>
                
                
                    <p>10.Sua Avaliação Quanto à Organização Geral do Evento</p>
                    <StyledDivCheck>
                        <SytledCheck type="checkbox" id="otimo10" />
                        <label htmlFor="otimo10">Ótimo</label>

                        <SytledCheck type="checkbox" id="bom10" />
                        <label htmlFor="bom10">Bom</label>

                        <SytledCheck type="checkbox" id="regular10" />
                        <label htmlFor="regular10">Regular</label>

                        <SytledCheck type="checkbox" id="naoSatisfatorio10" />
                        <label htmlFor="naoSatisfatorio10">Não satisfatório</label>
                    </StyledDivCheck>
                </div>
            
                <label htmlFor="1">Sugestões:</label>
                <StyledInput type="text" id="1" />
                <label htmlFor="2">Quais os aspectos mais positivos deste encontro?</label>
                <StyledInput type="text" id="2" />
                <label htmlFor="3">Quais os aspectos menos positivos deste encontro?</label>
                <StyledInput type="text" id="3" />
            </StyledMain>
            <StyledFooter>
                <NavBar/>
            </StyledFooter>
        </>    
    )
}

const StyledMain = styled.main`
    color: #F6F6F6;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.75rem;
    padding: 5% 10% 10% 10%;
    gap: 10px;

    @media screen and (min-width: 280px) and (max-width: 932px) {
        font-size: 1rem;
    }
`

const StyledDivCategoria = styled.div`
    display: flex;
    align-items: center;
    
`

const StyledDivCheck = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5%;
    width: 90%;
`

const SytledCheck = styled.input`
    width: 1.25rem;
    height: 1.25rem;
    appearance: none;
    border: 0.25em solid #FFFFFF;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.36);
    cursor: pointer;
`

const StyledInput = styled.input`
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.36);
    border: 0.125rem solid #FFFFFF;
    border-radius: 60px;
    width: 100%;
    padding: 0.625rem;
    font-size: 1.25rem;

    @media screen and (min-width: 768px) {
        width: 50%;
    }

    @media screen and (min-width: 1024px) {
        max-width: 50%;
        height: 3.75rem;
    }
`

const StyledFooter = styled.footer`
    bottom: 0;
    width: 100%;
    background-color: #1F1A50;
    color: white;
`;

export default FeedBack
