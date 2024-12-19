import styled from 'styled-components';
import ball from '../assets/images/tenets/ball.png';
import shineAnimation from '../assets/animations/birth.gif';

interface AnimatedBallProps {
  top?: string;
  BallWidth?: string;
  AnimationWidth?: string;
  className?: string;
}

const AnimatedBall = ({ top = "5%", BallWidth = "73%", AnimationWidth = "200%", className }: AnimatedBallProps) => {
  return (
    <BallWithAnimation top={top} className={className}>
      <GlowEffect />
      <AnimationImage src={shineAnimation} AnimationWidth={AnimationWidth} alt="shine-animation" />
      <BallImage BallWidth={BallWidth} src={ball} alt="ball" />
    </BallWithAnimation>
  );
};

const BallWithAnimation = styled.div<{ top: string }>`
  position: absolute;
  top: ${({ top }) => top};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 15vh;
  height: auto;
  margin: 0 auto;

  &.section-four-ball {
    @media (max-width: 768px) {
      top: 11%;
      max-width: 5vh;
    }
  }
`;

const AnimationImage = styled.img<{ AnimationWidth: string }>`
  width: ${({ AnimationWidth }) => AnimationWidth};
  mix-blend-mode: color-dodge;
  position: absolute;
  z-index: 1;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #FFA62B;
  mix-blend-mode: soft-light;
  filter: blur(34.8586px);
  z-index: 3;
`;

const BallImage = styled.img<{ BallWidth: string }>`
  width: ${({ BallWidth }) => BallWidth};
  height: auto;
  z-index: 2;
`;

export default AnimatedBall;