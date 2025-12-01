import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = ({ fullScreen = false, tip = null }) => {
  const containerStyle = fullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }
    : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      };

  return (
    <div style={containerStyle}>
      <Spin size="large" />
      {tip && <div style={{ marginTop: 16 }}>{tip}</div>}
    </div>
  );
};

export default LoadingSpinner;

