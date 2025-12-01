import React from 'react';
import { Card, List, Typography } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import structure from '../../docs/structure.json';

const { Text } = Typography;

const RelatedLinks = ({ currentPath }) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  
  // Determine base path
  const basePath = currentPath?.startsWith('/docs') ? '/docs' : '/documentation';

  // Find related resources from structure relationships
  const getRelatedLinks = () => {
    if (!currentPath || !structure || !structure.relationships || !structure.sections) {
      return [];
    }

    // Normalize current path for comparison - remove base paths and trailing slashes
    const normalizePath = (path) => {
      return path
        .replace(/^\/docs/, '')
        .replace(/^\/documentation/, '')
        .replace(/\/$/, '')
        .toLowerCase();
    };
    
    const normalizedCurrentPath = normalizePath(currentPath);
    
    // Find current resource by matching path
    let currentResource = null;
    for (const section of structure.sections) {
      if (!section.items) continue;
      for (const item of section.items) {
        // Normalize item path for comparison
        const normalizedItemPath = normalizePath(item.path);
        
        // Check exact match or if current path contains item path (for nested routes)
        if (normalizedCurrentPath === normalizedItemPath || 
            normalizedCurrentPath.endsWith(normalizedItemPath) ||
            normalizedItemPath.endsWith(normalizedCurrentPath)) {
          currentResource = item.id;
          break;
        }
        
        // Check children
        if (item.children && Array.isArray(item.children)) {
          for (const child of item.children) {
            const normalizedChildPath = normalizePath(child.path);
            if (normalizedCurrentPath === normalizedChildPath || 
                normalizedCurrentPath.endsWith(normalizedChildPath) ||
                normalizedChildPath.endsWith(normalizedCurrentPath)) {
              currentResource = item.id; // Use parent item id for relationships
              break;
            }
          }
        }
      }
      if (currentResource) break;
    }
    
    // If still not found, try to extract resource ID from path
    if (!currentResource) {
      const pathParts = normalizedCurrentPath.split('/').filter(Boolean);
      // Look for common resource patterns: /resources/{resource-id}
      const resourcesIndex = pathParts.indexOf('resources');
      if (resourcesIndex >= 0 && pathParts.length > resourcesIndex + 1) {
        const potentialResourceId = pathParts[resourcesIndex + 1];
        // Verify it exists in structure
        for (const section of structure.sections) {
          if (!section.items) continue;
          for (const item of section.items) {
            if (item.id === potentialResourceId) {
              currentResource = item.id;
              break;
            }
          }
          if (currentResource) break;
        }
      }
    }

    if (!currentResource || !structure.relationships[currentResource]) {
      return [];
    }

    const relatedIds = structure.relationships[currentResource];
    if (!Array.isArray(relatedIds)) {
      return [];
    }

    const relatedLinks = [];

    for (const section of structure.sections) {
      if (!section.items) continue;
      for (const item of section.items) {
        if (relatedIds.includes(item.id)) {
          // Convert path to use basePath
          const navPath = item.path.replace('/documentation', basePath);
          relatedLinks.push({
            title: item.title,
            path: navPath,
            description: item.description
          });
        }
      }
    }

    return relatedLinks;
  };

  const relatedLinks = getRelatedLinks();

  if (relatedLinks.length === 0) return null;

  return (
    <Card
      title={
        <span>
          <LinkOutlined style={{ marginRight: 8 }} />
          Related Topics
        </span>
      }
      style={{
        marginTop: 32,
        background: isDark ? '#1f1f1f' : '#fafafa',
        border: `1px solid ${isDark ? '#303030' : '#e8e8e8'}`
      }}
    >
      <List
        dataSource={relatedLinks}
        renderItem={(item) => {
          const handleClick = () => {
            // Remove leading /docs or /documentation if present
            let relativePath = item.path;
            if (item.path.startsWith('/docs/')) {
              relativePath = item.path.replace('/docs/', '');
            } else if (item.path.startsWith('/documentation/')) {
              relativePath = item.path.replace('/documentation/', '');
            } else if (item.path.startsWith('/docs')) {
              relativePath = item.path.replace('/docs', '');
            } else if (item.path.startsWith('/documentation')) {
              relativePath = item.path.replace('/documentation', '');
            }
            // Navigate using React Router
            navigate(`/docs/${relativePath}`, { replace: false });
          };
          
          return (
            <List.Item
              style={{ padding: '8px 0', cursor: 'pointer' }}
              onClick={handleClick}
            >
              <List.Item.Meta
                title={
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick();
                    }}
                    style={{ color: isDark ? '#1890ff' : '#1890ff' }}
                  >
                    {item.title}
                  </a>
                }
                description={item.description && (
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {item.description}
                  </Text>
                )}
              />
            </List.Item>
          );
        }}
      />
    </Card>
  );
};

export default RelatedLinks;

