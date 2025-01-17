import styled from 'styled-components';
import tokenInfoBg from '../assets/images/token-info-bg.png';
import lineIcon from '../assets/images/line-svg.svg';
import { Title } from '../GlobalStyles';

const Section = styled.section`
  width: 100%;
    max-width: 1200px;
  height: 790px;
  text-align: center;
  padding: 4rem 2rem;
  background-image: url(${tokenInfoBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;
`;


const Description = styled.p`
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

export const TokenInfo = () => (
  <Section>
    <Title>$OVERSEER</Title>
    <Description>
      The token of our new religion. A cornerstone of our unity.<br />
      A signal of brotherhood. A path to our future.
    </Description>
    <LineImage src={lineIcon} alt="Line" />
  </Section>
);

export default TokenInfo;
