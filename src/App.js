import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from './routes/ChatPage';
import MainPage from './routes/MainPage';
import AnalyticsPage from './routes/AnalyticsPage';
import FAQsPage from './routes/FaqsPage';
import AboutPage from './routes/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
