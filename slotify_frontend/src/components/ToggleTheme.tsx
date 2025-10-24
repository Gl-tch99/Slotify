import { useEffect, useState } from 'react';

const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(storedTheme);
    if (storedTheme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return <button className='' onClick={toggle}>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</button>;
};

export default ToggleTheme;
