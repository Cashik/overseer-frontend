import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/logo-2.svg';

// Добавьте эти интерфейсы в начало файла
interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

interface MobileMenuProps {
  isOpen: boolean;
}

const HeaderContainer = styled.header`
  width: 100vw;
  background-color: #0A0A0A;
  top: 0;
  z-index: 1000;
  position: relative;
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
  gap: 4rem;
  padding: 1rem;
  border-top: none;
  background: linear-gradient(to right, 
    transparent 0%,
    #5A5239 20%,
    #5A5239 80%,
    transparent 100%
  );
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 10px;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(NavLink)`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--active-color);
  }
  &.active {
    color: var(--active-color);
  }
`;

const ExternalMenuItem = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--active-color);
  }
`;

const LineImage = styled.img`
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 25px;

  @media (max-width: 768px) {
    height: 15px;
  }
`;

const BurgerButton = styled.button<BurgerButtonProps>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 2px;
    background-color: var(--accent-gold);
    margin: 5px 0;
    transition: 0.3s;

    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'};
    }
  }

  &:hover div {
    background-color: var(--active-color);
  }
`;

const MobileMenu = styled.div<MobileMenuProps>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background-color: var(--primary-dark);
    padding: 80px 20px;
    transition: 0.3s ease;
    z-index: 1000;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
    gap: 1rem;

    ${MenuItem}, ${ExternalMenuItem} {
      font-size: 1.2rem;
      padding: 0.7rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      
      &:hover {
        background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1));
      }
    }

    & > div {
      margin-top: 1.5rem;
      justify-content: center;
      gap: 2.5rem;

      a {
        transform: scale(3);
        
        svg {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;

const MobileMenuItem = styled(MenuItem)`
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.7rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    
    &:hover {
      background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1));
    }
  }
`;

const SocialIconsWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink to="/">
          <LogoIcon src={isMobile ? logo2 : logo} alt="Logo" />
        </LogoLink>
        <Menu>
          <ExternalMenuItem 
            href="https://x.com/TheOverseer_x/status/1860844357361795425"
            target="_blank"
            rel="noopener noreferrer"
          >
            Birth
          </ExternalMenuItem>
          <ExternalMenuItem 
            href="https://x.com/aiagentz/status/1862491315025715416"
            target="_blank"
            rel="noopener noreferrer"
          >
            Future
          </ExternalMenuItem>
          <MenuItem to="/codex">Luminal Codex</MenuItem>
          <MenuItem to="/docs">Docs</MenuItem>
          <MenuItem to="/wallet">Wallet</MenuItem>
          <MenuItem to="/faq">FAQ</MenuItem>
        </Menu>
        <SocialIconsWrapper>
          <SocialIcons />
        </SocialIconsWrapper>
        
        <BurgerButton onClick={toggleMenu} isOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </BurgerButton>

        <MobileMenu isOpen={isMenuOpen}>
          <ExternalMenuItem 
            href="https://x.com/TheOverseer_x/status/1860844357361795425"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Birth
          </ExternalMenuItem>
          <ExternalMenuItem 
            href="https://x.com/aiagentz/status/1862491315025715416"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Future
          </ExternalMenuItem>
          <MobileMenuItem to="/codex" onClick={() => setIsMenuOpen(false)}>Luminal Codex</MobileMenuItem>
          <MobileMenuItem to="/docs" onClick={() => setIsMenuOpen(false)}>Docs</MobileMenuItem>
          <MobileMenuItem to="/wallet" onClick={() => setIsMenuOpen(false)}>Wallet</MobileMenuItem>
          <MobileMenuItem to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileMenuItem>
          <SocialIcons />
        </MobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 