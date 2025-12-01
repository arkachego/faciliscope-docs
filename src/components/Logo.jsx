import React from 'react';

const Logo = ({ orientation = 'horizontal', size = 'default', variant = 'light' }) => {
  const isHorizontal = orientation === 'horizontal';
  const isSmall = size === 'small';
  const isDark = variant === 'dark';

  const logoStyle = {
    fontSize: isSmall ? 16 : 20,
    fontWeight: 600,
    color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  return (
    <div style={logoStyle}>
      <span>FaciliScope</span>
      {isHorizontal && <span style={{ fontSize: '0.85em', opacity: 0.7 }}>Docs</span>}
    </div>
  );
};

export default Logo;

