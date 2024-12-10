import styled from 'styled-components';
import aboutSectionBg from '../assets/images/section-1-bg.png';
import shineAnimation from '../assets/animations/birth.gif';
import lineIcon from '../assets/images/line-svg.svg';
import { Title } from '../GlobalStyles';



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
  max-width: 251px;
  height: auto;
  mix-blend-mode: color-dodge;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  mask-image: radial-gradient(circle, transparent 43px, black 70px);
  mask-size: 100% 100%;
  mask-position: center;
  // filter: brightness(1.5) contrast(1.2);
`;
const LineImage = styled.img`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 25px;

  @media (max-width: 768px) {
    height: 15px;
  }
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
    <LineImage src={lineIcon} alt="Line" />

  </Container>
);

export default AboutSection; 