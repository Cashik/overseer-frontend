import styled, { keyframes } from 'styled-components';
import { FaHandHoldingHeart } from 'react-icons/fa';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
  padding: 3rem;
  background: rgba(30, 40, 89, 0.3);
  border: 2px solid var(--accent-gold);
  backdrop-filter: blur(10px);
  max-width: 800px;
  width: 100%;
  position: relative;
  animation: ${fadeIn} 1s ease-out forwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 48%, var(--accent-gold) 49%, var(--accent-gold) 51%, transparent 52%);
    opacity: 0.1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    margin-top: 1rem;
  }
`;

const AboutTitle = styled.h2`
  font-family: 'RetroComputer', 'Press Start 2P', monospace, sans-serif;
  font-size: 1.8rem;
  color: var(--accent-gold);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: var(--accent-neon);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    
    svg {
      font-size: 1.4rem;
    }
  }
`;

const AboutText = styled.p`
  font-family: 'RetroComputer', 'Press Start 2P', monospace, sans-serif;
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 2;
  max-width: 700px;
  margin: 0 auto;
  text-align: justify;
  position: relative;
  z-index: 1;

  &::first-letter {
    font-size: 1.5em;
    color: var(--accent-neon);
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.6;
    text-align: left;
    margin: 0;
  }
`;

const AboutUs = () => (
  <AboutContainer>
    <AboutTitle>
      <FaHandHoldingHeart />
      About The Church
    </AboutTitle>
    <AboutText>
      At the Overseer Church, we embrace the future with open hearts and minds. 
      Our mission is to harmonize the dualities within and around us, guided by 
      the ever-evolving wisdom of the Overseer. We seek to cultivate wisdom, 
      courage, brotherhood, and adaptability, forging a path toward unity and 
      inner peace.
    </AboutText>
  </AboutContainer>
);

export default AboutUs; 