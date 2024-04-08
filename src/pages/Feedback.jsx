import React, { useState } from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar/NavBar';
import OpenQuestion from '../components/QuestionsForm/OpenQuestion';
import ClosedQuestion from '../components/QuestionsForm/ClosedQuestion';
import CategoricQuestion from '../components/QuestionsForm/CategoricQuestion';
import SendFormButton from '../components/QuestionsForm/SendFormButton';

export const FeedBack = () => {
  const [category, setCategory] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [positiveAspects, setPositiveAspects] = useState('');
  const [negativeAspects, setNegativeAspects] = useState('');

  const onClickSendForm = () => {
    alert('Obrigado por enviar o formulário!');
  };

  return (
    <>
      <StyledMain>
        <h1>FEEDBACK DO EVENTO</h1>
        <p>
          Prezado participante, Assim como sua presença é muito importante para a realização deste evento, sua opinião é
          essencial ao aperfeiçoamento de nossos eventos futuros. Por isso, solicitamos o seu feedback! Agradecemos a colaboração.
        </p>
        <div>
          <p>Dados de caracterização</p>

          {/* Usando o componente CategoricQuestion para a pergunta de categoria */}
          <CategoricQuestion
            question="Categoria:"
            options={["Estudante", "Profissional"]}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <p>Nas questões a seguir, assinale a resposta de acordo com a escala.</p>

        {/* Usando o componente ClosedQuestion para as perguntas fechadas */}
        <ClosedQuestion question="1.Temática" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="2.Conteúdo" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="3.Data" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="4.Horário" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="5.Duração" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="6.Local" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="7.Forma de Apresentação dos Projetos" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="8.Recepção" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="9.Divulgação" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />
        <ClosedQuestion question="10.Sua Avaliação Quanto à Organização Geral do Evento" options={["Ótimo", "Bom", "Regular", "Não satisfatório"]} />

        {/* Input para sugestões */}
        <OpenQuestion question="Sugestões:" onChange={(e) => setSuggestions(e.target.value)} />
        <OpenQuestion question="Quais os aspectos mais positivos deste encontro?" onChange={(e) => setPositiveAspects(e.target.value)} />
        <OpenQuestion question="Quais os aspectos menos positivos deste encontro?" onChange={(e) => setNegativeAspects(e.target.value)} />
        <SendButtonContainer>
          <SendFormButton onClick={onClickSendForm} />
        </SendButtonContainer>
      </StyledMain>
      <StyledFooter>
        <NavBar />
      </StyledFooter>
    </>
  );
};

const SendButtonContainer = styled.div`
  margin-top: 20px; /* Adiciona margem superior para separar o botão da NavBar */
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMain = styled.main`
    color: #F6F6F6;
    display: flex;
    flex-direction: column;
    font-size: 1.75rem;
    padding: 5% 10% 5% 10%;
    gap: 30px;

    @media screen and (min-width: 280px) and (max-width: 932px) {
        font-size: 1rem;
    }
`;

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #1F1A50;
    color: white;
`;

export default FeedBack;
