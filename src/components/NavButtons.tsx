import styled from 'styled-components';

import birthIcon from '../assets/images/icons/nav-buttons-icons/birth.svg';
import futureIcon from '../assets/images/icons/nav-buttons-icons/home.svg';
import codexIcon from '../assets/images/icons/nav-buttons-icons/codex.svg';



const NavButtonsContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  justify-content: center;
  position: relative;

  // &::before {
  //   content: '✟';
  //   position: absolute;
  //   top: -2rem;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   color: var(--accent-gold);
  //   font-size: 1.5rem;
  //   opacity: 0.5;
  // }

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;


const PixelButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  min-width: 180px;
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  background: rgba(0, 0, 0, 0.7);
  color: var(--text-light);
  border: 1px solid var(--accent-gold);
  cursor: pointer;
  transition: all 0.4s ease;
  text-decoration: none;
  position: relative;
  border-radius: 0;

  &::before, &::after {
    content: '✦';
    position: absolute;
    color: var(--accent-gold);
    font-size: 0.8rem;
    opacity: 0.6;
  }

  &::before {
    left: 0.5rem;
  }

  &::after {
    right: 0.5rem;
  }

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
                url("data:image/png;base64,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");
    color: var(--accent-gold);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
  }

  svg {
    font-size: 1.2rem;
    color: var(--accent-gold);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.5rem;
    min-width: 120px;
    gap: 0.5rem;
    
    svg {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.6rem;
    gap: 0.4rem;
    
    svg {
      font-size: 0.8rem;
    }
  }
`;



const NavButtonIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const NavButtons = () => (
  <NavButtonsContainer>
    <PixelButton href="https://x.com/TheOverseer_x/status/1860844357361795425" target="_blank">
      <NavButtonIcon src={birthIcon} alt="Birth" /> BIRTH
    </PixelButton>
    <PixelButton href="https://x.com/aiagentz/status/1862491315025715416" target="_blank">
      <NavButtonIcon src={futureIcon} alt="Future" /> FUTURE
    </PixelButton>
    {/* <ScrollButton 
      as="button" 
      onClick={() => {
        document.querySelector('#luminal-codex')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
    >
      <NavButtonIcon src={docsIcon} alt="Docs" /> DOCS
    </ScrollButton> */}
    <PixelButton href="/codex">
      <NavButtonIcon src={codexIcon} alt="Codex" /> CODEX
    </PixelButton>
  </NavButtonsContainer>
);

export default NavButtons; 