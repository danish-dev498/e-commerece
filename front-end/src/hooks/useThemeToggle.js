'use client';

import useLocalStorageState from './useLocalStorageState';

const { useState, useEffect, useLayoutEffect } = require('react');

const useThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    'isDarkMode',
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  console.log('################################', isDarkMode);

  useLayoutEffect(
    function () {
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    },
    [isDarkMode]
  );

  console.log('IS DARK MODE OVER HERE', isDarkMode);

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return {
    toggleDarkMode,
    isDarkMode,
  };
};

export default useThemeToggle;
