import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { useTheme } from '../../contexts/ThemeContext';

const TableOfContents = ({ headings }) => {
  const { isDark } = useTheme();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const headingElements = headings.map(h => {
        const element = document.getElementById(h.id);
        return element ? { element, id: h.id } : null;
      }).filter(Boolean);

      if (headingElements.length === 0) return;

      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        if (headingElements[i].element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Build items with proper indentation based on level
  const buildItems = (headings) => {
    return headings.map((heading) => {
      const paddingLeft = (heading.level - 1) * 16;
      const isActive = activeId === heading.id;
      
      return (
        <div
          key={heading.id}
          onClick={(e) => handleClick(e, heading.id)}
          style={{
            paddingLeft: `${paddingLeft}px`,
            paddingTop: '4px',
            paddingBottom: '4px',
            paddingRight: '8px',
            cursor: 'pointer',
            fontSize: heading.level === 1 ? '14px' : heading.level === 2 ? '13px' : '12px',
            fontWeight: heading.level <= 2 ? 500 : 400,
            color: isActive 
              ? (isDark ? '#1890ff' : '#1890ff')
              : (isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)'),
            borderLeft: isActive 
              ? `2px solid ${isDark ? '#1890ff' : '#1890ff'}`
              : '2px solid transparent',
            transition: 'all 0.2s',
            marginLeft: heading.level > 1 ? '0' : '0'
          }}
          onMouseEnter={(e) => {
            if (!isActive) {
              e.currentTarget.style.color = isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive) {
              e.currentTarget.style.color = isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)';
            }
          }}
        >
          {heading.text}
        </div>
      );
    });
  };

  if (headings.length === 0) return null;

  return (
    <Card
      title="Table of Contents"
      size="small"
      style={{
        background: isDark ? '#1f1f1f' : '#fff',
        border: `1px solid ${isDark ? '#303030' : '#e8e8e8'}`,
        maxHeight: 'calc(75vh - 100px)',
        display: 'flex',
        flexDirection: 'column'
      }}
      styles={{
        body: {
          padding: '0px',
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <div style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: 'calc(75vh - 160px)',
        paddingTop: '8px',
        paddingLeft: '8px',
        paddingBottom: '8px',
      }}>
        {buildItems(headings)}
      </div>
    </Card>
  );
};

export default TableOfContents;

