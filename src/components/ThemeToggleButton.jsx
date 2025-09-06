import React, {useContext} from 'react';
import {ThemeContext} from './contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <button 
        onClick = {toggleTheme}
        className="p-2 rounded-full transition-colors duration-300"
        >
            {theme === 'dark'} ? (
                <FaSun className="text-yellow-400"/>
            ) : (
                <FaMoon className="text-gray-800"/>
            )
        </button>
    )
}

export default ThemeToggleButton;
