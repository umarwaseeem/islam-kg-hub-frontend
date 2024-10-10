import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AnalyticsChart from '../components/AnalyticsChart';

export default function AnalyticsPage() {
    const [selectedQuery, setSelectedQuery] = useState('');
    const [chartData, setChartData] = useState({ labels: [], data: [] });

    const defaultQueries = [
        "Number of narrations by 5 narrators.",
        "Number of narrations by 10 narrators.",
        "Number of narrations by 20 narrators.",
        "Number of narrations by 30 narrators.",
    ];

    const handleQuerySubmit = async () => {
        if (!selectedQuery) return;

        let apiEndpoint;
        switch (selectedQuery) {
            case "Number of narrations by 5 narrators.":
                numberOfNarrationsByNumberOfNarrators(5);
                break;
            case "Number of narrations by 10 narrators.":
                numberOfNarrationsByNumberOfNarrators(10);
                break;
            case "Number of narrations by 20 narrators.":
                numberOfNarrationsByNumberOfNarrators(20);
                break;
            case "Number of narrations by 30 narrators.":
                numberOfNarrationsByNumberOfNarrators(30);
                break;
            default:
                console.error("Unknown query");
                return;
        }

        
    };

    const numberOfNarrationsByNumberOfNarrators = async (numOfNarrators) => {
        try {
            const response = await fetch("http://localhost:8000/numOfNarrationsByNarrators?limit="+numOfNarrators, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
            const data = await response.json();
            console.log(data["response"]);
            const labels = data.response.map(item => item.name);
            const values = data.response.map(item => parseInt(item.num));

            setChartData({ labels, data: values });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        if (selectedQuery) {
            handleQuerySubmit();
        }
    }, [selectedQuery]);

    return (
        <div className="analytics-page bg-gray-100 min-h-screen font-serif">
            <Navbar links={[
                { href: "/", label: "Home" },
                { href: "/about", label: "About IslamKGHub" },
                { href: "/chat", label: "Chat" },
                { href: "/analytics", label: "Analytics" },
                { href: "/faqs", label: "FAQs" }
            ]} />
            <main className="content container mx-auto px-4 py-8">
                <h1 className="text-5xl font-extrabold mb-8 text-customBrown">Analytics</h1>

                <h2 className="text-3xl font-bold mb-4">Try Some Default Questions</h2>
                <div className="mb-8 flex items-center">
                    <select
                        className="flex-grow p-2 border border-gray-300 rounded-l-md"
                        value={selectedQuery}
                        onChange={(e) => setSelectedQuery(e.target.value)}
                    >
                        <option value="">Select a query</option>
                        {defaultQueries.map((query, index) => (
                            <option key={index} value={query}>{query}</option>
                        ))}
                    </select>
                    {/* <button
                        className="bg-customBrown text-white px-4 py-2 rounded-r-md hover:bg-customBrown-dark"
                        onClick={handleQuerySubmit}
                    >
                        Ask
                    </button> */}
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {selectedQuery && (
                        <AnalyticsChart 
                            type="bar"
                            title={selectedQuery}
                            labels={chartData.labels}
                            data={chartData.data}
                        />
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

