import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Spin, Button, message } from 'antd';
import { SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import AppLayout from '../../components/layout/AppLayout';
import DocumentationLayout from '../../components/documentation/DocumentationLayout';
import DocumentationContent from '../../components/documentation/DocumentationContent';
import DocumentationSearch from '../../components/documentation/DocumentationSearch';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { loadDocumentationContent } from '../../utils/documentationLoader';
import structure from '../../docs/structure.json';

const DocumentationPage = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('Documentation');
  const [loading, setLoading] = useState(true);
  const [searchVisible, setSearchVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState(`/documentation/${path || ''}`);

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
        const fullPath = path ? `/documentation/${path}` : '/documentation';
        
        if (!structure || !structure.sections) {
          return null;
        }
        
        for (const section of structure.sections) {
          if (!section.items) continue;
          for (const item of section.items) {
            // Check exact path match
            if (item.path === fullPath || item.path === `/documentation/${path}`) {
              return {
                file: item.file,
                title: item.title
              };
            }
            // Check children
            if (item.children && Array.isArray(item.children)) {
              for (const child of item.children) {
                if (child.path === fullPath || child.path === `/documentation/${path}`) {
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
        navigate('/documentation');
        return;
      }

      setTitle(contentInfo.title);
      setCurrentPath(`/documentation/${path || ''}`);

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
    // Remove leading /documentation if present
    let relativePath = newPath;
    if (newPath.startsWith('/documentation/')) {
      relativePath = newPath.replace('/documentation/', '');
    } else if (newPath.startsWith('/documentation')) {
      relativePath = newPath.replace('/documentation', '');
    }
    // Navigate to the path
    navigate(`/documentation/${relativePath}`);
  };

  if (loading) {
    return (
      <AppLayout>
        <LoadingSpinner fullScreen />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div style={{ position: 'relative' }}>
        <div style={{ 
          position: 'fixed', 
          top: 64, 
          right: 24, 
          zIndex: 1000,
          display: 'flex',
          gap: 8
        }}>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => setSearchVisible(true)}
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          >
            Search
          </Button>
        </div>
        
        <DocumentationLayout
          currentPath={currentPath}
          onNavigate={handleNavigate}
        >
          <DocumentationContent
            content={content}
            path={currentPath}
            title={title}
          />
        </DocumentationLayout>

        <DocumentationSearch
          visible={searchVisible}
          onClose={() => setSearchVisible(false)}
          onNavigate={handleNavigate}
        />
      </div>
    </AppLayout>
  );
};

export default DocumentationPage;

