import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutSection({ heading, paragraph, icon }) {
    return (
        <div className='flex flex-col font-serif my-4'>
            <div className='flex items-center mb-4'>
                {React.cloneElement(icon, { className: 'h-8 w-8 text-black' })}
                <h2 className='text-3xl font-bold ml-3 text-black'>{heading}</h2>
            </div>
            <p className='text-xl mb-6'>{paragraph}</p>
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-serif">
            <Navbar links={[
                { href: "/", label: "Home" },
                { href: "/about", label: "About IslamKGHub" },
                { href: "/chat", label: "Chat" },
                { href: "/analytics", label: "Analytics" },
                { href: "/faqs", label: "FAQs" }
            ]} />

            <main className="flex-grow content px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-5xl font-extrabold mb-8 text-customBrown">About IslamKGHub</h1>

                    <AboutSection 
                        heading="Our Mission"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        paragraph="IslamKGHub aims to empower Islamic domain experts with an advanced question-answering and analytics platform, fostering accessibility of Islamic knowledge. We strive to bridge the gap between traditional Islamic scholarship and modern technology, making authentic information readily available to seekers of knowledge."
                    />

                    <AboutSection 
                        heading="What is IslamKGHub?"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        paragraph="IslamKGHub is a cutting-edge platform that combines the power of knowledge graphs, natural language processing, and machine learning to provide accurate and contextual answers to questions about Islam. Our system is built on a vast database of Islamic texts, including Hadiths, Tafsirs, and scholarly works, ensuring comprehensive and reliable information."
                    />

                    <AboutSection 
                        heading="Key Features"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                        paragraph={
                            <ul className="list-disc list-inside text-xl mb-6">
                                <li>Intelligent Question Answering: Get precise answers to your Islamic queries.</li>
                                <li>Knowledge Graph Analytics: Explore connections between Islamic concepts and scholars.</li>
                                <li>Multi-lingual Support: Access information in various languages.</li>
                                <li>User-friendly Interface: Easy to use for both scholars and general users.</li>
                                <li>Continuous Learning: Our system evolves and improves with each interaction.</li>
                            </ul>
                        }
                    />

                    <AboutSection 
                        heading="Who Can Benefit?"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                        paragraph={
                            <ul className="list-disc list-inside text-xl mb-6">
                                <li>Students of Islamic studies</li>
                                <li>Researchers and academics</li>
                                <li>Islamic scholars and teachers</li>
                                <li>General public seeking authentic Islamic information</li>
                                <li>Institutions and organizations focused on Islamic education</li>
                            </ul>
                        }
                    />

                    <AboutSection 
                        heading="Our Commitment"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                        paragraph="We are committed to providing accurate, unbiased, and contextually relevant information. Our team of Islamic scholars and technology experts work tirelessly to ensure the integrity and authenticity of the knowledge shared through our platform."
                    />

                    <AboutSection 
                        heading="Join Us in This Journey"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V7a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>}
                        paragraph="IslamKGHub is more than just a platform; it's a community of knowledge seekers and sharers. We invite you to explore, learn, and contribute to this growing ecosystem of Islamic knowledge."
                    />

                    <div className="mt-12 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                        <h3 className="text-2xl font-bold mb-2 text-customBrown">Disclaimer</h3>
                        <p className="text-lg">
                            While IslamKGHub strives to provide accurate and reliable information, it should not be considered a substitute for professional Islamic scholarly advice. Users are encouraged to verify information through recognized Islamic authorities and scholars. IslamKGHub is a tool for learning and exploration, but critical matters of faith and practice should always be confirmed with qualified Islamic experts.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}