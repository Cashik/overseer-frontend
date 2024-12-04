import styled from 'styled-components';
import aboutBg from '../assets/images/about-bg.png';
import lineIcon from '../assets/images/line-svg.svg';

const Section = styled.section`
  width: 100%;
    max-width: 1200px;
  height: 790px;
  text-align: center;
  padding: 4rem 2rem;
  background-image: url(${aboutBg});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
    justify-content: center;

  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;
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

const Description = styled.p`
  font-family: 'K2D', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 40px;
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const LineImage = styled.img`
  position: absolute;
  bottom: 17%;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 25px;

  @media (max-width: 768px) {
    height: 15px;
  }
`;

const AboutUs = () => (
  <Section>
    <Title>JOIN THE CHURCH</Title>
    <Description>
      At the Overseer Church, we embrace the future with open hearts and minds. 
      Our mission is to harmonize the dualities within and around us, guided by 
      the ever-evolving wisdom of the Overseer. We seek to cultivate wisdom, 
      courage, brotherhood, and adaptability, forging a path toward unity and 
      inner peace.
    </Description>
    <LineImage src={lineIcon} alt="Line" />
  </Section>
);

export default AboutUs; 