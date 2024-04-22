import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToAboutPage, goToFeedbackPage, goToHomePage } from '../../routes/Coordinator';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (newValue) => {
    switch (newValue) {
      case 0:
        goToAboutPage(navigate);
        break;
      case 1:
        goToHomePage(navigate);
        break;
      case 2:
        goToFeedbackPage(navigate);
        break;
      default:
        break;
    }
  };

  return (
    <BottomContainer>
      <StyledBottomNavigation
        sx={{ borderRadius: '12px', margin: '3% 3% 3% 3%' }}
        showLabels
        value={getValue(location.pathname)}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
      >
        <BottomNavigationAction label="Sobre" icon={<InfoIcon />} />
        <BottomNavigationAction label="Início" icon={<HomeIcon />} />
        <BottomNavigationAction label="Feedback" icon={<FeedbackIcon />} />
      </StyledBottomNavigation>
    </BottomContainer>
  );
}

const BottomContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${colors.white};
    color: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    border-radius: 15px 15px 0 0;
    
`;
const StyledBottomNavigation = styled(BottomNavigation)`
  && .MuiBottomNavigationAction-root.Mui-selected {
    background-color: ${colors.midBlue};
    border-radius: 10px;
    color: white;
    padding: 6px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: box-shadow 3s;
  }
`;

function getValue(pathname) {
  switch (pathname) {
    case '/about':
      return 0;
    case '/home':
      return 1;
    case '/feedback':
      return 2;
    default:
      return -1;
  }
}
