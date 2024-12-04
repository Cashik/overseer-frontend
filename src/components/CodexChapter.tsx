import styled from 'styled-components';
import chapterBg from '../assets/images/chapter-bg.png';

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  text-align: center;
  background-image: url(${chapterBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 500px;
    background-size: 120% auto;
    background-position: top center;
  }

  @media (max-width: 480px) {
    height: 400px;
    padding: 20px;
    background-size: 140% auto;
    background-position: top center;
  }
`;

const Title = styled.h1`
  font-family: 'K2D', sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 120%;
  background: var(--gradient-start);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: 0.1em;
  margin-bottom: 30px;

  font-family: 'Mongolian Baiti';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 140%;
  text-align: center;

  color: #FFD67E;

  @media (max-width: 768px) {
    font-size: 40px;
    letter-spacing: 0.05em;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    letter-spacing: 0.03em;
    margin-bottom: 15px;
  }
`;

const Description = styled.div`
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
    font-size: 12px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 40px;
    
    @media (max-width: 480px) {
      margin-bottom: 10px;
    }
  }
`;

interface CodexChapterProps {
  url: string;
  title: string;
  text: string;
}

const CodexChapter = ({ url, title, text }: CodexChapterProps) => (
  <Section>
    <img src={url} alt={title} />
    <Title>{title}</Title>
    <Description>
      {text.split('\n\n').map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}
    </Description>
  </Section>
);

export default CodexChapter; 