import { useState } from 'react';

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

  const toggleTheme = function () {
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    htmlElement.dataset.theme = newTheme;
  };

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
