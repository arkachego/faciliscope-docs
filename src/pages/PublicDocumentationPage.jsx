import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Spin, Button, message, Typography, Space } from 'antd';
import { SearchOutlined, BulbOutlined, MoonOutlined, PrinterOutlined, ShareAltOutlined } from '@ant-design/icons';
import DocumentationLayout from '../../components/documentation/DocumentationLayout';
import DocumentationContent from '../../components/documentation/DocumentationContent';
import DocumentationSearch from '../../components/documentation/DocumentationSearch';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { loadDocumentationContent } from '../../utils/documentationLoader';
import structure from '../../docs/structure.json';
import { Layout, ConfigProvider } from 'antd';
import Logo from '../../components/Logo';
import { ThemeProvider, useTheme } from '../../contexts/ThemeContext';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const PublicDocumentationPageContent = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const { isDark, getThemeConfig, toggleTheme } = useTheme();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('Documentation');
  const [loading, setLoading] = useState(true);
  const [searchVisible, setSearchVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState(`/docs/${path || ''}`);

  useEffect(() => {
    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const loadContent = async () => {
    try {
      setLoading(true);
      
      // Find the content file from structure
      const findContentFile = () => {
        const pathParts = (path || '').split('/').filter(Boolean);
        
        if (pathParts.length === 0) {
          // Default to introduction
          return {
            file: 'getting-started/introduction.md',
            title: 'Introduction to FaciliScope'
          };
        }

        // Build the full path to match
        const fullPath = path ? `/docs/${path}` : '/docs';
        
        if (!structure || !structure.sections) {
          return null;
        }
        
        for (const section of structure.sections) {
          if (!section.items) continue;
          for (const item of section.items) {
            // Check exact path match (adjust path from /documentation to /docs)
            const itemPath = item.path.replace('/documentation', '/docs');
            if (itemPath === fullPath || itemPath === `/docs/${path}`) {
              return {
                file: item.file,
                title: item.title
              };
            }
            // Check children
            if (item.children && Array.isArray(item.children)) {
              for (const child of item.children) {
                const childPath = child.path.replace('/documentation', '/docs');
                if (childPath === fullPath || childPath === `/docs/${path}`) {
                  return {
                    file: child.file,
                    title: child.title
                  };
                }
              }
            }
          }
        }
        return null;
      };

      const contentInfo = findContentFile();
      
      if (!contentInfo) {
        message.error('Documentation page not found');
        navigate('/docs');
        return;
      }

      setTitle(contentInfo.title);
      setCurrentPath(`/docs/${path || ''}`);

      // Load markdown content
      const markdownContent = await loadDocumentationContent(contentInfo.file);
      if (markdownContent) {
        setContent(markdownContent);
      } else {
        // Fallback: show placeholder content
        setContent(`# ${contentInfo.title}\n\nContent for this page is being prepared.`);
      }
    } catch (error) {
      console.error('Error:', error);
      message.error('Failed to load documentation');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigate = (newPath) => {
    // Remove leading /docs or /documentation if present
    let relativePath = newPath;
    if (newPath.startsWith('/docs/')) {
      relativePath = newPath.replace('/docs/', '');
    } else if (newPath.startsWith('/documentation/')) {
      relativePath = newPath.replace('/documentation/', '');
    } else if (newPath.startsWith('/docs')) {
      relativePath = newPath.replace('/docs', '');
    } else if (newPath.startsWith('/documentation')) {
      relativePath = newPath.replace('/documentation', '');
    }
    // Use React Router navigate for SPA navigation (no page refresh)
    navigate(`/docs/${relativePath}`, { replace: false });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      message.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <Layout style={{ minHeight: '100vh', background: isDark ? '#141414' : '#f0f2f5' }}>
        <LoadingSpinner fullScreen />
      </Layout>
    );
  }

  return (
    <ConfigProvider theme={getThemeConfig()}>
      <DocumentationLayout
        currentPath={currentPath}
        onNavigate={handleNavigate}
        basePath="/docs"
      >
        <Layout style={{ 
          marginLeft: 240,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <Header style={{
            padding: '0 24px',
            background: isDark ? '#1f1f1f' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: isDark ? '1px solid #303030' : '1px solid #f0f0f0',
            boxShadow: isDark ? 'none' : '0 1px 4px rgba(0,21,41,.08)',
            zIndex: 10,
            height: 64,
            lineHeight: '64px',
            position: 'sticky',
            top: 0,
            flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Text 
                strong
                style={{ 
                  fontSize: 18,
                  fontWeight: 600,
                  color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
                  margin: 0,
                  lineHeight: 1
                }}
              >
                {title}
              </Text>
            </div>
            <Space size="middle">
              <Button
                type="text"
                icon={isDark ? <BulbOutlined /> : <MoonOutlined />}
                onClick={toggleTheme}
                style={{
                  color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)'
                }}
              />
              <Button
                icon={<PrinterOutlined />}
                onClick={handlePrint}
              >
                Print
              </Button>
              <Button
                icon={<ShareAltOutlined />}
                onClick={handleShare}
              >
                Share
              </Button>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                onClick={() => setSearchVisible(true)}
              >
                Search
              </Button>
            </Space>
          </Header>
          <Content style={{ 
            padding: 24, 
            background: isDark ? '#000000' : '#f5f7fa',
            flex: 1,
            overflow: 'auto',
            minHeight: 0
          }}>
            <DocumentationContent
              content={content}
              path={currentPath}
              title={title}
            />
          </Content>
          <Footer style={{
            background: isDark ? '#1f1f1f' : '#fff',
            borderTop: isDark ? '1px solid #303030' : '1px solid #f0f0f0',
            padding: '12px 24px',
            textAlign: 'center',
            color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(0, 0, 0, 0.45)',
            fontSize: 14,
            height: 48,
            position: 'sticky',
            bottom: 0,
            zIndex: 10,
            flexShrink: 0
          }}>
            FaciliScope © {new Date().getFullYear()} - Facility Management System
          </Footer>
        </Layout>
      </DocumentationLayout>

      <DocumentationSearch
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
        onNavigate={handleNavigate}
        basePath="/docs"
      />
    </ConfigProvider>
  );
};

const PublicDocumentationPage = () => {
  return (
    <ThemeProvider>
      <PublicDocumentationPageContent />
    </ThemeProvider>
  );
};

export default PublicDocumentationPage;

