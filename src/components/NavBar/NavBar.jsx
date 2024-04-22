import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToAboutPage, goToFeedbackPage, goToHomePage } from '../../routes/Coordinator';
import styled from 'styled-components';

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
    <StyledBottomNavigation
      sx={{ borderRadius: '12px', margin: '3% 3% 3% 3%'}}
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
  );
}

const StyledBottomNavigation = styled(BottomNavigation)`
  && .MuiBottomNavigationAction-root.Mui-selected {
    background-color: #0277d6dd;
    border-radius: 10px;
    margin: 1% 2% 1% 2%;
    color: white;
    padding: 6px;
    transition: 3s;
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
