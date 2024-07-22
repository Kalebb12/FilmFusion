import { useState, useEffect } from 'react';
import { BiSun } from 'react-icons/bi';
import { RiMoonClearFill } from 'react-icons/ri';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
      <span onClick={handleToggle} className='cursor-pointer border border-[--secondary-color] p-1 rounded-full shadow-md'>{theme === 'light' ? <RiMoonClearFill/> : <BiSun fill='skyblue'/> }</span>
  );
};

export default ThemeSwitcher;