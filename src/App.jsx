import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hedr from './pages/Hedr';
import About from './pages/About';
import Project from './pages/Project';
import Futer from './pages/Futer';
import Minhed from './pages/HedrNew'; // Siz yozgan navigatsiya

function App() {
  return (
    <BrowserRouter>
      <Hedr />       
      <Minhed />     
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>

      <Futer />      {/* Doimiy pastda turadi */}
    </BrowserRouter>
  );
}

export default App;
