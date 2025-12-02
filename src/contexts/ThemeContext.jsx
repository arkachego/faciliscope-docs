import React, { createContext, useContext, useState, useEffect } from 'react';
import { theme } from 'antd';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const getThemeConfig = () => {
    const primary = '#009FB7';

    return {
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      token: {
        colorPrimary: primary,
        borderRadius: 6,
        fontSize: 14,
        fontFamily: "Maven Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      },
      components: {
        Layout: {
          headerBg: isDark ? '#1f1f1f' : '#fff',
          headerColor: isDark ? '#fff' : '#000',
          bodyBg: isDark ? '#000000' : '#f5f7fa',
          siderBg: isDark ? '#141414' : '#001529',
        },
        Menu: {
          darkItemBg: '#141414',
          darkSubMenuItemBg: '#0f0f0f',
          darkItemSelectedBg: primary,
        },
      },
    };
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, getThemeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

