import { useEffect, useState } from 'react';

import ThemeSwitcherStyled from './ThemeSwitcherStyle';
import icons from '../../assets/icons.svg';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');

  const themesDefinitions = {
    dark: {
      text: 'Light',
      icon: 'sun',
    },
    light: {
      text: 'Dark',
      icon: 'moon',
    },
  };

  const saveTheme = (newTheme) => window.localStorage.setItem('theme', newTheme);
  const loadTheme = () => window.localStorage.getItem('theme');

  const toggleTheme = function () {
    const htmlElement = document.querySelector('html');
    const newTheme = htmlElement.dataset.theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    saveTheme(newTheme);
    htmlElement.dataset.theme = newTheme;
  };

  useEffect(() => {
    document.querySelector('html').dataset.theme = loadTheme() || 'dark';
    setTheme(loadTheme() || 'dark');
  }, []);

  return (
    <ThemeSwitcherStyled onClick={toggleTheme} dataTheme={theme}>
      <span>{themesDefinitions[theme].text}</span>
      <svg>
        <use href={`${icons}#icon-${themesDefinitions[theme].icon}`} />
      </svg>
    </ThemeSwitcherStyled>
  );
};
export default ThemeSwitcher;
