import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import

export default function Navbar({ links }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Add this line

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="border-gray-200 bg-customGreen font-serif">
            <div className="md:px-24 flex md:flex-row flex-col items-center mx-auto p-2 bg-customGreen">
                <div className={`w-full md:block ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border bg-customGreen border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href={link.href} 
                                    className={`block py-2 px-3 text-white text-xl hover:text-customYellow relative
                                        ${location.pathname === link.href ? 'text-customYellow font-bold' : ''}
                                        after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-customYellow after:bottom-0 after:left-0
                                        after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out
                                        ${location.pathname === link.href ? 'after:scale-x-100 after:origin-bottom-left' : ''}
                                        hover:after:scale-x-100 hover:after:origin-bottom-left`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-row md:w-16 w-full justify-between items-center mt-2">
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <svg className={`w-5 h-5 ${menuOpen ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="logo.png" className="h-16" alt="IslamKGHub Logo" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
