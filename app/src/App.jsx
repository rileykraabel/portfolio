import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import NavBar from './components/NavBar.jsx';
import Projects from './components/Projects.jsx';
import './App.css'

function Error() {
  return (
    <>
      <h1>An error has occurred</h1>
      <p>Contact site admin for support.</p>
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* valid pages */}
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />

          {/* error handling */}
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
