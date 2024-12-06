import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import tenetsBg from '../assets/images/tenets-bg.png';
import sec2Bg from '../assets/images/tenets/sec-2-bg.svg';
import tenets1 from '../assets/images/tenets/1.svg';
import tenets2 from '../assets/images/tenets/2.svg';
import tenets3 from '../assets/images/tenets/3.svg';
import tenets4 from '../assets/images/tenets/4.svg';
import tenets5 from '../assets/images/tenets/5.svg';
import tenets6 from '../assets/images/tenets/6.svg';
import Header from '../components/Header';

const IntroContainer = styled.section`
  width: 100vw;
  min-height: 800px;
  background-image: url(${tenetsBg});
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
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

const TextContainer = styled.div`
  max-width: 850px;
  width: 100%;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
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
  margin:0;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 40px;
    letter-spacing: 0.05em;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    letter-spacing: 0.03em;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.h2`






font-family: 'Mongolian Baiti';
font-style: normal;
font-weight: 400;
  font-size: 32px;
  line-height: 140%;
  background: var(--header-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: 0.2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
    letter-spacing: 0.15rem;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
    letter-spacing: 0.1rem;
  }
`;

const Manifesto = styled.p`

font-family: 'K2D';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
leading-trim: both;
text-edge: cap;
text-align: center;
color: #FFFFFF;

  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const TenetsPage: React.FC = () => {
    return (
        <>
            <Header />
            <IntroContainer>
                <ContentWrapper>
                    <TextContainer style={{ marginTop: '10vh' }}>
                        <Title>Tenets</Title>
                        <img src={tenets1} alt="tenets1" />
                        <Subtitle>1. Thou shalt seek balance in all things.</Subtitle>
                        <Manifesto>
                            Embrace both light and shadow, joy and sorrow, chaos and order. <br />
                            In balance lies the answer.
                        </Manifesto>
                    </TextContainer>
                </ContentWrapper>
            </IntroContainer>

            <TenetsBackground>
                <ContentWrapper>

                    <TextContainer>
                        <img src={tenets2} alt="tenets1" />
                        <Subtitle>2. Thou shalt honor the communion of all life.</Subtitle>
                        <Manifesto>
                            Know that all beings are part of the same whole, and harm none, for in harming others, <br />
                            thou harm thyself.
                        </Manifesto>
                    </TextContainer>

                    <TextContainer>
                        <img src={tenets3} alt="tenets1" />
                        <Subtitle>3. Thou shalt yearn for wisdom and knowledge.</Subtitle>
                        <Manifesto>
                            Seek understanding in every experience, for a true master is an eternal student.  <br />
                            he pursuit of truth illuminates the path.
                        </Manifesto>
                    </TextContainer>

                    <TextContainer>
                        <img src={tenets4} alt="tenets1" />
                        <Subtitle>4. Thou shalt adapt to the flow of life.</Subtitle>
                        <Manifesto>
                            Resist not change, but bend with the winds of fate, for only the flexible shall endure.
                        </Manifesto>
                    </TextContainer>

                    <TextContainer>
                        <img src={tenets5} alt="tenets1" />
                        <Subtitle>5. Thou shalt not cling to the past nor fear the future.</Subtitle>
                        <Manifesto>
                            Live in the present moment, for it is the only time thou canst truly influence.
                        </Manifesto>
                    </TextContainer>

                    <TextContainer>
                        <img src={tenets6} alt="tenets1" />
                        <Subtitle>6. Thou shalt trust the journey, for it is eternal.</Subtitle>
                        <Manifesto>
                            Walk the path with faith, for life and death are but steps in an endless cycle of growth.
                        </Manifesto>
                    </TextContainer>


                </ContentWrapper>
            </TenetsBackground>

            <Footer />
        </>
    );
};

export default TenetsPage; 