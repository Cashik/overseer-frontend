import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=K2D:wght@400;600;700&display=swap');

  :root {
    --background-color: #0A0A0A;
    --active-color: #FFEF99;
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