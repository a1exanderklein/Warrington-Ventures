import React, { useState, useEffect } from 'react';
import PortcoCard from '../components/PortcoCard.jsx';
import PortcoModal from '../components/PortcoModal.jsx';

export default function Portfolio() {
    // Auto Scroll to Top when entering page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedPortco, setSelectedPortco] = useState(null);

    const PortfolioCompanies = [
        {
        name: 'TampaBay.Ventures',
        industry: 'Technology',
        imageUrl: './assets/logos/tbvLogo.png',
        about: "TampaBay.Ventures is a venture capital firm with a focus on supporting tech enabled companies in the Tampa Bay region."
        },
        {
        name: 'DeepWork Capital',
        industry: 'Technology',
        imageUrl: './assets/logos/deepworkLogo.png',
        about: "DeepWork Capital, an early-stage VC firm in Orlando, FL, investing in tech and life sciences startups. Partner with us for innovation & growth."
        },
    ];

    const openModal = (portco) => {
        setSelectedPortco(portco);
    };

    const closeModal = () => {
        setSelectedPortco(null);
    };

    return (
        <div className='mt-20'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-w-screen h-full">
                {PortfolioCompanies.map((portco, index) => (
                    <PortcoCard
                    key={index}
                    name={portco.name}
                    industry={portco.industry}
                    imageUrl={portco.imageUrl}
                    onClick={() => openModal(portco)}
                    />
                ))}

                {selectedPortco && (
                    <PortcoModal portco={selectedPortco} onClose={closeModal} />
                )}
            </div>
        </div>
    );
}