import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from './routes/ChatPage';
import MainPage from './routes/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
