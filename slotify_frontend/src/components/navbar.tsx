import React, { useEffect, useState } from 'react'
import slot from '../assets/Adobe_Express_-_file.png'

const Navbar = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('theme', theme);
      }, [theme]);
      
      const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
      };

  return (
    <>
        <div >
        <nav className='flex fixed top-5 right-0 left-0 bg-white dark:bg-black bg-opacity-20 py-3 px-7 border rounded-2xl bottom-8 gap-7 backdrop-blur-lg w-vh h-max'>
        <div>
            <img src = {slot} width="50" height="50"></img>
        </div>
        <div className='flex-1/4 p-1.5'
          id="/"
          >Home
        </div>
        <div className='flex-1/4 p-1.5'
          id="projects"
          >Book Venue
        </div>
        <div className='flex-1/4 p-1.5'
          id="friends"
          >
        </div>
        <div className='flex-1/4 p-1.5'
        onClick={toggleTheme}
          id="profile"
          >asdsadas
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar