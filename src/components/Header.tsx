import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/logo-2.svg';

const HeaderContainer = styled.header`
  width: 100vw;
  background-color: #0A0A0A;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 3vw;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoIcon = styled.img`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Menu = styled.nav`
  position: relative;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  border: none;
  border-top: 1px solid var(--active-color);
  border-radius: 21px 21px 0 0;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    right: 0;
    left: 0;
    margin: 0;
    z-index: -1;
    border-radius: 21px 21px 0 0;
    background: linear-gradient(180deg, var(--active-color) 0%, transparent 100%);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

const MenuItem = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--active-color);
  }
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink to="/">
          <LogoIcon src={isMobile ? logo2 : logo} alt="Logo" />
        </LogoLink>
        <Menu>
          <MenuItem to="/birth">Birth</MenuItem>
          <MenuItem to="/future">Future</MenuItem>
          <MenuItem to="/luminal-codex">Luminal Codex</MenuItem>
          <MenuItem to="/docs">Docs</MenuItem>
          <MenuItem to="/wallet">Wallet</MenuItem>
          <MenuItem to="/faq">FAQ</MenuItem>
        </Menu>
        <SocialIcons />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 