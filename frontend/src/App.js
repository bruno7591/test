import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import UpdateInfoPage from './pages/UpdateInfoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/update-info" element={<UpdateInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;