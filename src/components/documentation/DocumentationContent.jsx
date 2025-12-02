import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Typography, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import TableOfContents from './TableOfContents';
import RelatedLinks from './RelatedLinks';
import { findPreviousNext } from '../../utils/documentationNavigation';

const DocumentationContent = ({ content, path, title }) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [headings, setHeadings] = useState([]);
  const [previousNext, setPreviousNext] = useState({ previous: null, next: null });
  
  // Determine base path from current path (docs app uses /docs)
  const basePath = '/docs';

  useEffect(() => {
    if (!content) {
      setHeadings([]);
      return;
    }
    
    // Extract headings from content for TOC
    try {
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const matches = [];
      let match;
      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1]?.length || 1;
        const text = match[2] || '';
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        if (id) {
          matches.push({ level, text, id });
        }
      }
      setHeadings(matches);
    } catch (error) {
      console.error('Error extracting headings:', error);
      setHeadings([]);
    }
  }, [content]);
  
  useEffect(() => {
    // Find previous and next items
    // Ensure path is properly formatted
    let searchPath = path;
    if (!path.startsWith('/docs') && !path.startsWith('/documentation')) {
      searchPath = `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
    }
    const nav = findPreviousNext(searchPath, basePath);
    setPreviousNext(nav);
  }, [path, basePath]);

  const handleNavigation = (navPath) => {
    // Remove leading /docs or /documentation if present
    let relativePath = navPath;
    if (navPath.startsWith('/docs/')) {
      relativePath = navPath.replace('/docs/', '');
    } else if (navPath.startsWith('/documentation/')) {
      relativePath = navPath.replace('/documentation/', '');
    } else if (navPath.startsWith('/docs')) {
      relativePath = navPath.replace('/docs', '');
    } else if (navPath.startsWith('/documentation')) {
      relativePath = navPath.replace('/documentation', '');
    }
    // Use React Router navigate for SPA navigation
    navigate(`/docs/${relativePath}`, { replace: false });
  };

  // Navigation buttons component
  const NavigationButtons = () => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      gap: 20,
      width: '100%'
    }}>
      {previousNext.previous ? (
        <Button
          type="default"
          onClick={() => handleNavigation(previousNext.previous.path)}
          size="large"
          style={{ 
            flex: 1,
            height: 'auto',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <LeftOutlined style={{ marginRight: 8 }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', flex: 1 }}>
            <span style={{ fontSize: 12, opacity: 0.65, lineHeight: 1.2 }}>Previous</span>
            <span style={{ fontWeight: 500, fontSize: 14, lineHeight: 1.4, marginTop: 4 }}>{previousNext.previous.title}</span>
          </div>
        </Button>
      ) : (
        <Button
          type="default"
          disabled
          icon={<LeftOutlined />}
          size="large"
          style={{ 
            flex: 1,
            height: 'auto',
            padding: '12px 16px'
          }}
        >
          <span style={{ fontSize: 12, opacity: 0.65 }}>Previous</span>
        </Button>
      )}
      {previousNext.next ? (
        <Button
          type="default"
          onClick={() => handleNavigation(previousNext.next.path)}
          size="large"
          style={{ 
            flex: 1, 
            maxWidth: '48%',
            height: 'auto',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', flex: 1 }}>
            <span style={{ fontSize: 12, opacity: 0.65, lineHeight: 1.2 }}>Next</span>
            <span style={{ fontWeight: 500, fontSize: 14, lineHeight: 1.4, marginTop: 4 }}>{previousNext.next.title}</span>
          </div>
          <RightOutlined style={{ marginLeft: 8 }} />
        </Button>
      ) : (
        <Button
          type="default"
          disabled
          icon={<RightOutlined />}
          size="large"
          style={{ 
            flex: 1, 
            maxWidth: '48%',
            height: 'auto',
            padding: '12px 16px'
          }}
        >
          <span style={{ fontSize: 12, opacity: 0.65 }}>Next</span>
        </Button>
      )}
    </div>
  );

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Navigation buttons at top */}
      <NavigationButtons />

      <div style={{ display: 'flex', gap: 24, marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <div
            className="documentation-content"
            style={{
              lineHeight: 1.8,
              fontSize: 16,
              color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)'
            }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  if (!inline && match) {
                    try {
                      return (
                        <SyntaxHighlighter
                          style={isDark ? vscDarkPlus : vs}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      );
                    } catch (error) {
                      // Fallback to regular code block if SyntaxHighlighter fails
                      return (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    }
                  }
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({ children, ...props }) => {
                  const text = Array.isArray(children) ? children.map(c => String(c)).join('') : String(children || '');
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return <h1 id={id} style={{ marginTop: 24, marginBottom: 24 }} {...props}>{children}</h1>;
                },
                h2: ({ children, ...props }) => {
                  const text = Array.isArray(children) ? children.map(c => String(c)).join('') : String(children || '');
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return <h2 id={id} style={{ marginTop: 24, marginBottom: 12 }} {...props}>{children}</h2>;
                },
                h3: ({ children, ...props }) => {
                  const text = Array.isArray(children) ? children.map(c => String(c)).join('') : String(children || '');
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return <h3 id={id} style={{ marginTop: 20, marginBottom: 10 }} {...props}>{children}</h3>;
                },
                h4: ({ children, ...props }) => {
                  const text = Array.isArray(children) ? children.map(c => String(c)).join('') : String(children || '');
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return <h4 id={id} style={{ marginTop: 16, marginBottom: 8 }} {...props}>{children}</h4>;
                },
                a: ({ href, children, ...props }) => {
                  // Handle internal documentation links
                  if (href?.startsWith('/documentation') || href?.startsWith('/docs')) {
                    return (
                      <a
                        href={href}
                        onClick={(e) => {
                          e.preventDefault();
                          // Normalize path to /docs
                          let navPath = href;
                          if (href.startsWith('/documentation')) {
                            navPath = href.replace('/documentation', '/docs');
                          }
                          // Remove leading /docs
                          let relativePath = navPath;
                          if (navPath.startsWith('/docs/')) {
                            relativePath = navPath.replace('/docs/', '');
                          } else if (navPath.startsWith('/docs')) {
                            relativePath = navPath.replace('/docs', '');
                          }
                          // Navigate using React Router
                          navigate(`/docs/${relativePath}`, { replace: false });
                        }}
                        style={{ color: isDark ? '#1890ff' : '#1890ff', textDecoration: 'none' }}
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  }
                  // External links
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                      {children}
                    </a>
                  );
                },
                table: ({ children }) => (
                  <div style={{ overflowX: 'auto', margin: '16px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>{children}</table>
                  </div>
                ),
                th: ({ children }) => (
                  <th style={{ 
                    border: `1px solid ${isDark ? '#303030' : '#e8e8e8'}`,
                    padding: '8px 12px',
                    background: isDark ? '#1f1f1f' : '#fafafa',
                    textAlign: 'left'
                  }}>{children}</th>
                ),
                td: ({ children }) => (
                  <td style={{ 
                    border: `1px solid ${isDark ? '#303030' : '#e8e8e8'}`,
                    padding: '8px 12px'
                  }}>{children}</td>
                ),
                ul: ({ children, ...props }) => (
                  <ul style={{ 
                    margin: '16px 0',
                    paddingLeft: '20px',
                    paddingRight: '0',
                    overflow: 'visible'
                  }} {...props}>
                    {children}
                  </ul>
                ),
                ol: ({ children, ...props }) => (
                  <ol style={{ 
                    margin: '16px 0',
                    paddingLeft: '20px',
                    paddingRight: '0',
                    overflow: 'visible'
                  }} {...props}>
                    {children}
                  </ol>
                ),
                li: ({ children, ...props }) => (
                  <li style={{ 
                    margin: '4px 0',
                    paddingLeft: '4px',
                    listStylePosition: 'outside'
                  }} {...props}>
                    {children}
                  </li>
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          
          <RelatedLinks currentPath={path} />
        </div>
        
        {headings.length > 0 && (
          <div style={{ width: 300, position: 'sticky', top: 0, alignSelf: 'flex-start', maxHeight: 'calc(100vh - 48px)', marginLeft: '24px', marginTop: '24px' }}>
            <TableOfContents headings={headings} />
          </div>
        )}
      </div>

      {/* Navigation buttons at bottom */}
      <NavigationButtons />
    </div>
  );
};

export default DocumentationContent;

