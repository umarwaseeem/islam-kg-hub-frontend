import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqData = [
    {
        category: "General",
        items: [
            { question: "What is IslamKGHub?", answer: "IslamKGHub is an advanced question-answering and analytics platform designed to make Islamic knowledge more accessible. It combines knowledge graphs, natural language processing, and machine learning to provide accurate and contextual answers to questions about Islam." },
            { question: "Who can use IslamKGHub?", answer: "IslamKGHub is designed for a wide range of users, including students of Islamic studies, researchers, academics, Islamic scholars, teachers, and anyone seeking authentic Islamic information." },
            { question: "Is the information on IslamKGHub reliable?", answer: "Yes, our system is built on a vast database of authentic Islamic texts, including Hadiths, Tafsirs, and scholarly works. However, for critical matters of faith and practice, we always recommend confirming with qualified Islamic experts." },
        ]
    },
    {
        category: "Features",
        items: [
            { question: "What are the key features of IslamKGHub?", answer: "IslamKGHub offers intelligent question answering, knowledge graph analytics, multi-lingual support, a user-friendly interface, and continuous learning capabilities." },
            { question: "Can I use IslamKGHub in languages other than English?", answer: "Yes, IslamKGHub supports multiple languages to make Islamic knowledge accessible to a global audience." },
            { question: "How does the knowledge graph analytics work?", answer: "Our knowledge graph analytics feature allows users to explore connections between Islamic concepts, scholars, and texts, providing a comprehensive understanding of various topics." },
        ]
    }
];

function FaqCategory({ category, items }) {
    return (
        <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-customBrown">{category}</h2>
            {items.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item mb-4 border-b border-gray-200 pb-4">
            <button 
                className="faq-question text-xl font-semibold text-left w-full flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className={`arrow transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
            </button>
            {isOpen && <p className="faq-answer mt-2 text-lg">{answer}</p>}
        </div>
    );
}

export default function FaqsPage() {
    return (
        <div className="faqs-page font-serif">
            <Navbar links={[
                { href: "/", label: "Home" },
                { href: "/about", label: "About IslamKGHub" },
                { href: "/chat", label: "Chat" },
                { href: "/analytics", label: "Analytics" },
                { href: "/faqs", label: "FAQs" }
            ]} />
            <main className="content px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-left text-customBrown">Frequently Asked Questions</h1>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <FaqCategory key={index} category={faq.category} items={faq.items} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

