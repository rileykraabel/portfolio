import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import About from './About.jsx';
import Contact from './Contact.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import './App.css'

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* valid pages */}
          <Route path="/portfolio/" element={<About />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/projects" element={<Projects />} />

          {/* error handling */}
          <Route path="/portfolio/error" element={<Error />} />
          <Route path="/portfolio/*" element={<Navigate to="/portfolio/error" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App
