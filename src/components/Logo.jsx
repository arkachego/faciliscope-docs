import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const sizePresets = {
  small: 48,
  medium: 64,
  large: 80,
  xlarge: 96,
};

const Logo = ({ orientation = 'vertical', size = 'medium', variant = 'light', iconOnly = false }) => {
  const primaryColor = '#009FB7';

  // Keep FaciliScope wordmark teal in both light and dark modes
  const titleColor = primaryColor;
  const taglineColor = variant === 'dark' ? 'rgba(255, 255, 255, 0.65)' : '#888';

  const actualSize = typeof size === 'number' ? size : sizePresets[size] || sizePresets.medium;
  const logoImage = '/light-logo.png';

  const titleFontSize = (40 / 80) * actualSize;
  const taglineFontSize = (15 / 80) * actualSize;

  const isHorizontal = orientation === 'horizontal';

  if (iconOnly) {
    return (
      <img
        src={logoImage}
        alt="FaciliScope"
        width="40px"
        height="40px"
        style={{
          borderRadius: '50%',
          objectFit: 'contain',
        }}
      />
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isHorizontal ? 'row' : 'column',
        alignItems: 'center',
        marginRight: isHorizontal ? 8 : 0,
      }}
    >
      <img
        src={logoImage}
        alt="FaciliScope"
        width={isHorizontal ? '40px' : actualSize}
        height={isHorizontal ? '40px' : actualSize}
        style={{
          borderRadius: '50%',
          objectFit: 'contain',
          flexShrink: isHorizontal ? 0 : 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isHorizontal ? 'flex-start' : 'center',
          justifyContent: 'center',
          marginLeft: isHorizontal ? 12 : 0,
        }}
      >
        <h1
          style={{
            fontSize: `${titleFontSize}px`,
            fontWeight: 700,
            color: titleColor,
            margin: isHorizontal ? 0 : '8px 0 0 0',
            letterSpacing: '-0.5px',
            lineHeight: 1.2,
          }}
        >
          FaciliScope
        </h1>

        <Text
          style={{
            fontSize: `${taglineFontSize}px`,
            color: taglineColor,
            fontWeight: 400,
            letterSpacing: '0.3px',
            marginTop: isHorizontal ? 2 : `${-2 * (actualSize / 80)}px`,
          }}
        >
          Documentation
        </Text>
      </div>
    </div>
  );
};

export default Logo;


