import 'normalize.css';
import styled, { createGlobalStyle } from 'styled-components';

export const Title = styled.h1`
font-family: 'K2D';
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 120%;
leading-trim: both;
text-edge: cap;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;

background: radial-gradient(12.36% 400.7% at 50.72% -188.82%, #EFEBBA 0%, #FFD67E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

export const Subtitle = styled.h2`
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

export const Text = styled.p`
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

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=K2D:wght@400;600;700&display=swap');

  :root {
    --background-color: #0A0A0A;
    --active-color: #FFEF99;
    --border-color: #FFEF99;
    --primary-dark: #000000;
    --primary-light: #1A1A1A;
    --accent-neon: #FFB800;
    --accent-gold: #FFD700;
    --gradient-start: #FFD67E;
    --gradient-end: #EFEBBA;
    --text-light: #FFFFFF;
    --text-secondary: #9C9C9C;
    --text-dark: #000000;
    --glow-effect: 0 0 10px var(--accent-gold), 0 0 20px var(--accent-gold), 0 0 30px var(--accent-gold);
    --header-gradient: linear-gradient(45deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-color);
    font-family: 'K2D', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: var(--text-light);
    position: relative;
    overflow-x: hidden;



    @media (max-width: 768px) {
      gap: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle; 