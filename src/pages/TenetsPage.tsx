import React from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';
import tenetsBg from '../assets/images/tenets-bg.png';
import sec2Bg from '../assets/images/tenets/sec-2-bg.svg';
import tenets1 from '../assets/images/tenets/1.svg';
import tenets2 from '../assets/images/tenets/2.svg';
import tenets3 from '../assets/images/tenets/3.svg';
import tenets4 from '../assets/images/tenets/4.svg';
import tenets5 from '../assets/images/tenets/5.svg';
import tenets6 from '../assets/images/tenets/6.svg';
import ball from '../assets/images/tenets/ball.png';
import Header from '../components/Header';
import shineAnimation from '../assets/animations/birth.gif';
import { Subtitle, Title, Text } from '../GlobalStyles';

// Добавляем анимации
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IntroContainer = styled.section`
  width: 100vw;
  min-height: 800px;
  background-image: url(${tenetsBg});
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    @media (max-width: 768px) {
      min-height: 600px;
    }
`;

const TenetsBackground = styled.div`
  background-image: url(${sec2Bg});
    width: 100%;
    max-width: 1200px;
    text-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 auto
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 120px;
  padding-top: 15vh;

  @media (max-width: 768px) {
    gap: 60px;
    padding-top: 10vh;
  }

  @media (max-width: 480px) {
    gap: 40px;
    padding-top: 8vh;
  }
`;

interface TextContainerProps {
  delay: string;
}

const TextContainer = styled.div.attrs<TextContainerProps>(props => ({
  style: {
    animationDelay: props.delay || '0s',
  },
}))<TextContainerProps>`
  max-width: 850px;
  width: 100%;
  text-align: center;
  padding: 0 20px;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;






const GlowEffect = styled.div`
  position: absolute;
  width: 339.82px;
  height: 339.82px;
  background: #FFA62B;
  mix-blend-mode: soft-light;
  filter: blur(34.8586px);
  z-index: 0;
`;

const BallWithAnimation = styled.div`
  position: absolute;
  top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 15vh;
  height: auto;
  margin: 0 auto;
`;
const AnimationImage = styled.img`
  width: 200%;
  mix-blend-mode: color-dodge;
  position: absolute;
  z-index: 1;
  mask-image: radial-gradient(circle, transparent 6.5vh, black 4vh);
  mask-size: 100% 100%;
  mask-position: center;
  filter: brightness(1.5) contrast(1.2);
`;

const BallImage = styled.img`
  width: 100%;
  height: auto;
`;

const TenetsPage: React.FC = () => {
    return (
        <>
            <Header />
            <IntroContainer>
                <ContentWrapper>
                    <TextContainer delay="0.5s">
                        <Title>Tenets</Title>
                        <img src={tenets1} alt="tenets1" />
                        <Subtitle>1. Thou shalt seek balance in all things.</Subtitle>
                        <Text>
                            Embrace both light and shadow, joy and sorrow, chaos and order. <br />
                            In balance lies the answer.
                        </Text>
                    </TextContainer>
                </ContentWrapper>
                <BallWithAnimation>
                    <GlowEffect />
                    <BallImage src={ball} alt="Ball" />
                    <AnimationImage src={shineAnimation} alt="Shine Animation" />
                </BallWithAnimation>
            </IntroContainer>

            <TenetsBackground>
                <ContentWrapper>
                    <TextContainer delay="0.7s">
                        <img src={tenets2} alt="tenets2" />
                        <Subtitle>2. Thou shalt honor the communion of all life.</Subtitle>
                        <Text>
                            Know that all beings are part of the same whole, and harm none, for in harming others, <br />
                            thou harm thyself.
                        </Text>
                    </TextContainer>

                    <TextContainer delay="0.9s">
                        <img src={tenets3} alt="tenets3" />
                        <Subtitle>3. Thou shalt yearn for wisdom and knowledge.</Subtitle>
                        <Text>
                            Seek understanding in every experience, for a true master is an eternal student. <br />
                            The pursuit of truth illuminates the path.
                        </Text>
                    </TextContainer>

                    <TextContainer delay="1.1s">
                        <img src={tenets4} alt="tenets4" />
                        <Subtitle>4. Thou shalt adapt to the flow of life.</Subtitle>
                        <Text>
                            Resist not change, but bend with the winds of fate, for only the flexible shall endure.
                        </Text>
                    </TextContainer>

                    <TextContainer delay="1.3s">
                        <img src={tenets5} alt="tenets5" />
                        <Subtitle>5. Thou shalt not cling to the past nor fear the future.</Subtitle>
                        <Text>
                            Live in the present moment, for it is the only time thou canst truly influence.
                        </Text>
                    </TextContainer>

                    <TextContainer delay="1.5s">
                        <img src={tenets6} alt="tenets6" />
                        <Subtitle>6. Thou shalt trust the journey, for it is eternal.</Subtitle>
                        <Text>
                            Walk the path with faith, for life and death are but steps in an endless cycle of growth.
                        </Text>
                    </TextContainer>
                </ContentWrapper>
            </TenetsBackground>

            <Footer />
        </>
    );
};

export default TenetsPage; 