import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToAboutPage, goToFeedbackPage, goToHomePage } from '../../routes/Coordinator';

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
    <BottomNavigation
      showLabels
      value={getValue(location.pathname)}
      onChange={(event, newValue) => {
        handleNavigation(newValue);
      }}
    >
      <BottomNavigationAction label="Sobre" icon={<InfoIcon />} />
      <BottomNavigationAction label="Início" icon={<HomeIcon />} />
      <BottomNavigationAction label="Feedback" icon={<FeedbackIcon />} />
    </BottomNavigation>
  );
}

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
