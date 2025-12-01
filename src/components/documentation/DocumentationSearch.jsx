import React, { useState, useEffect, useMemo } from 'react';
import { Modal, Input, List, Typography, Tag, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Fuse from 'fuse.js';
import { useTheme } from '../../contexts/ThemeContext';
import structure from '../../docs/structure.json';

const { Text } = Typography;

const DocumentationSearch = ({ visible, onClose, onNavigate, basePath = '/documentation' }) => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchIndex, setSearchIndex] = useState(null);

  useEffect(() => {
    // Build search index from structure
    const buildSearchIndex = () => {
      if (!structure || !structure.sections) {
        return [];
      }
      
      const items = [];
      structure.sections.forEach(section => {
        if (!section.items) return;
        section.items.forEach(item => {
          items.push({
            id: item.id,
            title: item.title,
            description: item.description || '',
            path: item.path,
            tags: item.tags || [],
            section: section.title
          });
          if (item.children && Array.isArray(item.children)) {
            item.children.forEach(child => {
              items.push({
                id: child.id,
                title: child.title,
                description: child.description || '',
                path: child.path,
                tags: [],
                section: `${section.title} > ${item.title}`
              });
            });
          }
        });
      });
      return items;
    };

    try {
      const index = buildSearchIndex();
      if (index.length > 0) {
        const fuse = new Fuse(index, {
          keys: ['title', 'description', 'tags', 'section'],
          threshold: 0.3,
          includeScore: true
        });
        setSearchIndex(fuse);
      }
    } catch (error) {
      console.error('Error building search index:', error);
    }
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery || !searchIndex) return [];
    return searchIndex.search(searchQuery).slice(0, 10).map(result => result.item);
  }, [searchQuery, searchIndex]);

  const handleSelect = (path) => {
    // Convert path to use basePath
    const navPath = path.replace('/documentation', basePath);
    onNavigate(navPath);
    onClose();
    setSearchQuery('');
  };

  return (
    <Modal
      title="Search Documentation"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      style={{ top: 100 }}
    >
      <Input
        size="large"
        prefix={<SearchOutlined />}
        placeholder="Search documentation..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoFocus
      />
      <div style={{ marginTop: 16, maxHeight: 400, overflow: 'auto' }}>
        {searchQuery && searchResults.length === 0 ? (
          <Empty description="No results found" />
        ) : searchQuery && searchResults.length > 0 ? (
          <List
            dataSource={searchResults}
            renderItem={(item) => (
              <List.Item
                style={{ cursor: 'pointer', padding: '12px' }}
                onClick={() => handleSelect(item.path)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isDark ? '#1f1f1f' : '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <List.Item.Meta
                  title={<Text strong>{item.title}</Text>}
                  description={
                    <div>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        {item.section}
                      </Text>
                      {item.description && (
                        <div style={{ marginTop: 4 }}>
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {item.description}
                          </Text>
                        </div>
                      )}
                      {item.tags && item.tags.length > 0 && (
                        <div style={{ marginTop: 8 }}>
                          {item.tags.slice(0, 3).map(tag => (
                            <Tag key={tag} size="small" style={{ marginTop: 4 }}>
                              {tag}
                            </Tag>
                          ))}
                        </div>
                      )}
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <Empty description="Start typing to search..." />
        )}
      </div>
    </Modal>
  );
};

export default DocumentationSearch;

