import styled from 'styled-components';
import logo from '../assets/images/logo.svg'; // Предполагаем, что логотип находится в этой папке
import { useEffect } from 'react';
import { useState } from 'react';
import logo2 from '../assets/images/logo-2.svg';
import { NavLink } from 'react-router-dom';


const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #0A0A0A;
  top: 0;
  z-index: 1000;
  position: relative;
  background: radial-gradient(81.41% 519.2% at 50% -349.11%, rgba(255, 239, 153, 0.5) 0%, rgba(10, 10, 10, 0.5) 77.63%);

  @media (max-width: 768px) {
    padding: 0.5rem 3vw;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 5vw;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 3vw;
    gap: 0.5rem;
  }
`;



const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-self: start;
`;

const LogoIcon = styled.img`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CenterText = styled.div`
  font-family: 'K2D', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #696968;
  text-align: center;
  justify-self: center;


  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 0.5rem;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  justify-self: end;

  a {
    font-family: 'K2D', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #FFEF99;
    text-decoration: underline;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 12px;
      gap: 0.5rem;
    }
  }
`;



const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <FooterContainer>
            <FooterContent>
                <LogoLink to="/">
                    <LogoIcon src={isMobile ? logo2 : logo} alt="Logo" />
                </LogoLink>
                <CenterText>© 2025 Overseer. All rights reserved.</CenterText>
                <Links>
                    {/* <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a> */}
                </Links>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer; 