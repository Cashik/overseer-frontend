import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import { VideoLoader } from './components/VideoLoader';
import Home from './pages/Home';
import CodexPage from './pages/CodexPage';
import TenetsPage from './pages/TenetsPage';
import JourneyPage from './pages/JourneyPage';
import RoadmapPage from './pages/RoadmapPage';

const App = () => {


  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/codex" element={<CodexPage />} />
          <Route path="/tenets" element={<TenetsPage />} />
          <Route path="/confession" element={<JourneyPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
        </Routes>
      </Router>
      <VideoLoader />
    </>
  );
};

export default App;
