import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar/NavBar';

export const FeedBack = () => {
  return (
    <>
      <Container>
        <iframe
          title="Microsoft Forms"
          width="100%"
          height="100%"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jmbFH9URUwzTVMwTFhaSE0zM05PRjEwRUpXT1BNTy4u&embed=true"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          allowFullScreen
          webkitAllowFullScreen
          mozAllowFullScreen
          msAllowFullScreen
        />
      </Container>
      <NavBar />
    </>
  );
};

const Container = styled.div`
  position: fixed;
  padding: 3%;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
`;


export default FeedBack;
