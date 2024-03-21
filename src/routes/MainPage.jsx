import React from 'react';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

function RightAlignedSection({ heading, link, linkText, paragraph, boxText }) {
    return (
        <div className='flex flex-col'>
            <div className={`flex md:flex-row flex-col justify-evenly my-16 mx-20`}>
                <div className='bg-customBrown p-16 rounded-lg md:w-1/3 w-full'>
                    <h2 className='text-4xl text-white text-center'>
                        {boxText}
                    </h2>
                </div>
                <div className="flex flex-col md:w-2/3 w-full mt-8 md:ml-8">
                    <h2 className='text-4xl md:text-left text-center font-bold mb-4'>{heading}</h2>
                    <p className='text-xl md:text-left text-center mb-6'>{paragraph}</p>

                    <a href={link} className='text-gray-500 md:justify-start justify-center text-lg underline flex items-center'>
                        {linkText}
                        <img src="right-arrow.svg" alt="right arrow icon" height={20} width={20} />
                    </a>
                </div>
            </div>
            <div className='bg-black h-1 mx-auto w-64'></div>
        </div>
    );
}

function LeftAlignedSection({ heading, link, linkText, paragraph, boxText }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize initially to set the initial state
        handleResize();

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    // Render RightAlignedSection if it's a small screen
    if (isSmallScreen) {
        return <RightAlignedSection heading={heading} link={link} linkText={linkText} paragraph={paragraph} boxText={boxText} />;
    }

    return (
        <div className='flex flex-col'>
            <div className={`flex md:flex-row flex-col justify-evenly my-16 mx-20`}>
                <div className="flex flex-col md:w-2/3 w-full mt-8 md:mr-8">
                    <h2 className='text-4xl md:text-right text-center font-bold mb-4'>{heading}</h2>
                    <p className='text-xl md:text-right text-center mb-6'>{paragraph}</p>

                    <a href={link} className='text-gray-500 md:justify-end justify-center text-lg underline flex items-center'>
                        <img src="left-arrow.svg" alt="left arrow icon" height={20} width={20} />
                        {linkText}
                    </a>
                </div>
                <div className='bg-customBrown p-16 rounded-lg md:w-1/3 w-full'>
                    <h2 className='text-4xl text-white text-center'>
                        {boxText}
                    </h2>
                </div>
            </div>
            <div className='bg-black h-1 mx-auto w-64'></div>
        </div>
    );
}

function MainPage() {

    return (
        <div>
            <Navbar links={[
                { href: "/about", label: "About IslamKGHub" },
                { href: "/chat", label: "Chat" },
                { href: "/analytics", label: "Analytics" },
                { href: "/question-list", label: "Question List" }
            ]} />
            <div className={"h-[50vh] bg-customBrown flex justify-center items-center"}>
                <img className='m-auto' src="logo.png" height={250} width={250} alt="IslamKGHub Logo" />
            </div>
            <RightAlignedSection
                heading={"IslamKGHub"}
                link={"/about"}
                linkText={"About IslamKGHub"}
                paragraph={"is a question answering and analytics platform that helps you seamlessly obtain factual Islamic information"}
                boxText={"What is IslamKGHub?"}
            />
            <LeftAlignedSection
                heading={"Mission To"}
                link={"/mission"}
                linkText={"Read our mission statement"}
                paragraph={"empower Islamic domain experts with an advanced question-answering and analytics platform to foster accessibility of the Islamic domain"}
                boxText={"Mission"}
            />
            <RightAlignedSection
                heading={"Applications"}
                link={"/applications"}
                linkText={"Explore our Q/A and Analytics"}
                paragraph={"the platform has diverse applications for people including haddith researchers, studnets and ulemas."}
                boxText={"How to use it?"}
            />

        </div>
    );
}

export default MainPage;
