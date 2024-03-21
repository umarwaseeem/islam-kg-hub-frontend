import React from 'react';

function Footer() {
    return (
        <footer className="bg-customRed text-white py-8 font-serif">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex-shrink-0 w-1/3">
                    <p className='text-xs md:text-lg'>&copy; NUCES - Islamabad, Pakistan</p>
                </div>

                <div className="flex-grow text-center w-1/3">
                    <p className='text-xs md:text-lg'>Copyright© IslamKGHub. All rights reserved</p>
                </div>

                <div className="flex justify-end flex-grow w-1/3">
                    <a href="https://linkedin.com" className="text-gray-300 hover:text-gray-400 mx-2 h-6 w-6 md:h-16 md:w-16">
                        <img src="linkedin.svg" alt="linkedin" />
                    </a>
                    <a href="https://linkedin.com" className="text-gray-300 hover:text-gray-400 mx-2 h-6 w-6 md:h-16 md:w-16">
                        <img src="linkedin.svg" alt="linkedin" />
                    </a>
                    <a href="https://linkedin.com" className="text-gray-300 hover:text-gray-400 mx-2 h-6 w-6 md:h-16 md:w-16">
                        <img src="linkedin.svg" alt="linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
