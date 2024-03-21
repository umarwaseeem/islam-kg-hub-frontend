import React, { useState } from 'react';

export default function Navbar({ links }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="border-gray-200 bg-customGreen">
            <div className="md:px-24 flex md:flex-row flex-col items-center mx-auto p-2 bg-customGreen">
                <div className={`w-full md:block ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border bg-customGreen border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="block py-2 px-3 text-white hover:text-customYellow">{link.label}</a>
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
