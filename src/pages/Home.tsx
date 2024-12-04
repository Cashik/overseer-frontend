import styled from 'styled-components';
import Header from '../components/Header';
import AboutSection from '../components/GifContainer';
import { TokenInfo } from '../components/TokenInfo';
import AboutUs from '../components/AboutUs';
import { useEffect } from 'react';
import { useLoaderStore } from '../store/loaderStore';
import Footer from '../components/Footer';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Home = () => {

    const setIsLoading = useLoaderStore((state) => state.setIsLoading);

    useEffect(() => {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3300);
  
      return () => clearTimeout(timer);
    }, [setIsLoading]);
  return (
    <Container>
      <ContentWrapper>
        <Header />
        <AboutSection />
        <TokenInfo />
        <AboutUs />
        <Footer />
      </ContentWrapper>
    </Container>
  );
};

export default Home; 