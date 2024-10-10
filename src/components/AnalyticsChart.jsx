import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AnalyticsChart = ({ type, title, labels, data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: title,
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: title,
                        font: {
                            size: 28,
                            family: 'serif'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 12 // Increase y-axis label size
                            }
                        }
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [type, title, labels, data]);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default AnalyticsChart;