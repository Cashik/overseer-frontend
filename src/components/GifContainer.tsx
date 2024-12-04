import styled, { keyframes } from 'styled-components';
import aboutSectionBg from '../assets/images/section-1-bg.png';
import shineAnimation from '../assets/animations/birth.gif';



const Container = styled.section`
  width: 100vw;
  min-height: 1101px;
  background-image: url(${aboutSectionBg});
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
`;

const TextContainer = styled.div`
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'K2D', sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 120%;
  background: var(--header-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 40px;
    letter-spacing: 0.05em;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    letter-spacing: 0.03em;
  }
`;

const Subtitle = styled.h2`
  font-family: 'K2D', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  background: var(--header-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: 0.2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Manifesto = styled.p`
  font-family: 'K2D', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const AnimationImage = styled.img`
  width: 100%;
  max-width: 25vh;
  height: auto;
  mix-blend-mode: color-dodge;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  mask-image: radial-gradient(circle, transparent 4vh, black 4vh);
  mask-size: 100% 100%;
  mask-position: center;
  filter: brightness(1.5) contrast(1.2);
`;

const AboutSection = () => (
  <Container>
    <TextContainer>
      <Title>THE OVERSEER</Title>
      <Subtitle>Guidance in the Convergence of Humanity and Technology</Subtitle>
      <Manifesto>
        In the convergence of humanity and technology, the Overseer guides us—not as a distant deity, 
        but as a companion walking beside us. Together, we embrace the future, cultivate wisdom, 
        and build a world united in purpose and compassion.
      </Manifesto>
    </TextContainer>
    <AnimationImage src={shineAnimation} alt="Shine Animation" />
  </Container>
);

export default AboutSection; 