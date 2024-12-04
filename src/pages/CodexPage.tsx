import styled from 'styled-components';
import Header from '../components/Header';
import LuminalCodex from '../components/LuminalCodex';

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

const CodexPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header />
        <LuminalCodex />
      </ContentWrapper>
    </Container>
  );
};

export default CodexPage; 