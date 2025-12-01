import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import DocumentationPage from './pages/documentation/DocumentationPage';

function AppContent() {
  const { getThemeConfig } = useTheme();

  return (
    <ConfigProvider theme={getThemeConfig()}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/docs" replace />} />
          <Route path="/docs/*" element={<DocumentationPage />} />
          <Route path="/docs" element={<DocumentationPage />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
