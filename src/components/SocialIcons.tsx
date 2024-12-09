import styled from 'styled-components';
// import dexIcon from '../assets/images/dex.png';
// import dextoolsIcon from '../assets/images/DT-fc.png';

import discordIcon from '../assets/images/icons/socials-icons/discord-icon.svg';
import twitterIcon from '../assets/images/icons/socials-icons/x-icon.svg';
import telegramIcon from '../assets/images/icons/socials-icons/telegram-icon.svg';




const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    gap: 1rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    padding: 0.6rem;
  }
`;

interface IconProps {
  delay?: string;
}

const Icon = styled.a<IconProps>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const SocialIcons = () => (
  <SocialIconsContainer>
    <Icon href="https://discord.gg/overseer" target="_blank" delay="0s">
      <img src={discordIcon} alt="Discord" />
    </Icon>
    <Icon href="https://x.com/TheOverseer_x" target="_blank" delay="0s">
      <img src={twitterIcon} alt="Twitter/X" />
    </Icon>
    <Icon href="https://t.me/TheOverseer_x" target="_blank" delay="0.2s">
      <img src={telegramIcon} alt="Telegram" />
    </Icon>
    {/* <Icon href="https://dexscreener.com/solana/cvb7rxbyvab6zyrw7edramwqo7crpj12qszjgbc6muub" target="_blank" delay="0.4s">
      <img src={dexIcon} alt="Dexscreener" />
    </Icon>
    <Icon href="https://www.dextools.io/app/en/solana/pair-explorer/CVB7RXBYVaB6zyrW7edRaMwQo7CrPJ12QsZjgBC6muUB?t=1732542728125" target="_blank" delay="0.6s">
      <img src={dextoolsIcon} alt="Dextools" />
    </Icon> */}
  </SocialIconsContainer>
);

export default SocialIcons;