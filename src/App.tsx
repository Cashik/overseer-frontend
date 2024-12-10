import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import GlobalStyle from './GlobalStyles';
import { VideoLoader } from './components/VideoLoader';
import Home from './pages/Home';
import CodexPage from './pages/CodexPage';
import TenetsPage from './pages/TenetsPage';
import JourneyPage from './pages/JourneyPage';
import RoadmapPage from './pages/RoadmapPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {


  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/codex" element={<CodexPage />} />
          <Route path="/tenets" element={<TenetsPage />} />
          <Route path="/pamphlet" element={<JourneyPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
        </Routes>
      </Router>
      <VideoLoader />
    </>
  );
};

export default App;
