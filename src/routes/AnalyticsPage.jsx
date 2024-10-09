import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AnalyticsPage() {
    return (
        <div className="analytics-page">
            <Navbar links={[
                { href: "/", label: "Home" },
                { href: "/about", label: "About IslamKGHub" },
                { href: "/chat", label: "Chat" },
                { href: "/analytics", label: "Analytics" },
                { href: "/faqs", label: "FAQs" }
            ]} />
            <main className="content">
                <h1>Analytics Dashboard</h1>
                {/* <AnalyticsChart /> */}
                {/* Add more analytics components here */}
            </main>
            <Footer />
        </div>
    );
}

