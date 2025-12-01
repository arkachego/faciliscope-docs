import React from 'react';
import { Layout } from 'antd';
import DocumentationNav from './DocumentationNav';
import { useTheme } from '../../contexts/ThemeContext';
import Logo from '../Logo';

const { Sider } = Layout;

const DocumentationLayout = ({ children, currentPath, onNavigate, basePath = '/documentation' }) => {
  const { isDark } = useTheme();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible={false}
        collapsed={false}
        theme="dark"
        width={240}
        style={{
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: isDark ? '#141414' : '#001529',
          borderRight: isDark ? '1px solid #303030' : 'none',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        <div style={{
          height: 64,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 16px',
          borderBottom: isDark ? '1px solid #303030' : '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Logo orientation="horizontal" size="small" variant="dark" />
        </div>
        <div style={{
          flex: '1 1 0%',
          overflowY: 'auto',
          overflowX: 'hidden',
          minHeight: 0,
          maxHeight: 'calc(100vh - 64px)',
          WebkitOverflowScrolling: 'touch'
        }}>
          <DocumentationNav
            currentPath={currentPath}
            onNavigate={onNavigate}
            basePath={basePath}
          />
        </div>
      </Sider>
      {children}
    </Layout>
  );
};

export default DocumentationLayout;

