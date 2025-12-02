import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import DocumentationPage from './pages/documentation/PublicDocumentationPage';

function AppContent() {
  const { getThemeConfig } = useTheme();

  return (
    <ConfigProvider theme={getThemeConfig()}>
      <Router>
        <Routes>
          {/* Default to Introduction to FaciliScope under /docs */}
          <Route
            path="/"
            element={<Navigate to="/docs/getting-started/introduction" replace />}
          />
          <Route
            path="/docs"
            element={<Navigate to="/docs/getting-started/introduction" replace />}
          />
          {/* Main docs routes */}
          <Route path="/docs/*" element={<DocumentationPage />} />
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
