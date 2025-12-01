import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {
  BookOutlined,
  HomeOutlined,
  AppstoreOutlined,
  SafetyOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  DownOutlined,
  RightOutlined
} from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import structure from '../../docs/structure.json';

const iconMap = {
  BookOutlined: BookOutlined,
  HomeOutlined: HomeOutlined,
  AppstoreOutlined: AppstoreOutlined,
  SafetyOutlined: SafetyOutlined,
  FileTextOutlined: FileTextOutlined,
  ThunderboltOutlined: ThunderboltOutlined
};

const DocumentationNav = ({ currentPath, onNavigate, basePath = '/documentation' }) => {
  const { isDark } = useTheme();
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    if (!structure || !structure.sections) return;
    
    // Set selected key based on current path
    const findItemByPath = (items, path) => {
      if (!items || !Array.isArray(items)) return null;
      for (const item of items) {
        if (item.path === path) {
          return item.id;
        }
        if (item.children && Array.isArray(item.children)) {
          const found = findItemByPath(item.children, path);
          if (found) return found;
        }
      }
      return null;
    };

    try {
      // Find the selected item by path and build unique key
      let selectedKey = null;
      let parentSectionId = null;
      
      for (const section of structure.sections) {
        if (!section.items) continue;
        for (const item of section.items) {
          const itemKey = `${section.id}-${item.id}`;
          // Normalize paths for comparison (handle both /documentation and /docs)
          const normalizedItemPath = item.path.replace('/documentation', basePath);
          const normalizedCurrentPath = currentPath.replace('/documentation', basePath);
          
          if (normalizedItemPath === normalizedCurrentPath || item.path === currentPath) {
            selectedKey = itemKey;
            parentSectionId = section.id;
            break;
          }
          if (item.children) {
            for (const child of item.children) {
              const childKey = `${section.id}-${item.id}-${child.id}`;
              const normalizedChildPath = child.path.replace('/documentation', basePath);
              if (normalizedChildPath === normalizedCurrentPath || child.path === currentPath) {
                selectedKey = childKey;
                parentSectionId = section.id;
                break;
              }
            }
          }
          if (selectedKey) break;
        }
        if (selectedKey) break;
      }
      
      if (selectedKey) {
        setSelectedKeys([selectedKey]);
        if (parentSectionId) {
          setOpenKeys([parentSectionId]);
        }
      }
    } catch (error) {
      console.error('Error setting navigation selection:', error);
    }
  }, [currentPath]);

  const buildMenuItems = (sections) => {
    if (!sections || !Array.isArray(sections)) return [];
    
    return sections.map((section, sectionIndex) => {
      const Icon = iconMap[section.icon] || AppstoreOutlined;
      
      const items = (section.items || []).map((item, itemIndex) => {
        // Create unique key by combining section and item IDs
        const uniqueKey = `${section.id}-${item.id}`;
        
        if (item.children && Array.isArray(item.children) && item.children.length > 0) {
          return {
            key: uniqueKey,
            label: item.title,
            children: item.children.map((child, childIndex) => {
              const childKey = `${uniqueKey}-${child.id}`;
              return {
                key: childKey,
                label: child.title
              };
            })
          };
        }
        return {
          key: uniqueKey,
          label: item.title
        };
      });

      return {
        key: section.id,
        label: section.title,
        icon: <Icon />,
        type: 'group',
        children: items
      };
    });
  };

  const menuItems = structure && structure.sections ? buildMenuItems(structure.sections) : [];

  const handleMenuClick = ({ key }) => {
    setSelectedKeys([key]);
    
    // Find the item by key and navigate
    if (!structure || !structure.sections) return;
    
    // Parse the key to find the corresponding item
    // Keys are in format: section-id-item-id or section-id-item-id-child-id
    const keyParts = key.split('-');
    
    for (const section of structure.sections) {
      if (section.id === key) continue; // Skip section keys
      
      if (!section.items) continue;
      for (const item of section.items) {
        const itemKey = `${section.id}-${item.id}`;
        
        // Check if this is the clicked item (no children or direct item click)
        if (itemKey === key) {
          // Convert path to use basePath
          const navPath = item.path.replace('/documentation', basePath);
          onNavigate(navPath);
          return;
        }
        
        // Check if a child was clicked
        if (item.children) {
          for (const child of item.children) {
            const childKey = `${section.id}-${item.id}-${child.id}`;
            if (childKey === key) {
              // Convert path to use basePath
              const navPath = child.path.replace('/documentation', basePath);
              onNavigate(navPath);
              return;
            }
          }
        }
      }
    }
  };

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      onClick={handleMenuClick}
      style={{
        borderRight: 0,
        background: 'transparent'
      }}
      items={menuItems}
    />
  );
};

export default DocumentationNav;

