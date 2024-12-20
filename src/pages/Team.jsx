import React, { useState, useEffect } from 'react';
import TeamMemberCard from '../components/TeamMemberCard.jsx';
import TeamMemberModal from '../components/TeamMemberModal.jsx';
import Header from '../components/Header.jsx';

export default function Team() {
    // Scroll to top only when entering the page
    useEffect(() => {
        if (!selectedMember) {
        window.scrollTo(0, 0);
        }
    }, []);

    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
        name: 'Abhishek Kundalia',
        year: 'Senior',
        major: 'Finance',
        focus: 'Artificial Intelligence/ML',
        imageUrl: './assets/headshots/headshot_kundaliaAbhishek.jpg',
        about: "Alexander is a junior studying Computer Science with a focus on Artificial Intelligence and Machine Learning. He’s interested in applying AI to solve real-world problems."
        },
        {
        name: 'Daniel Igualada',
        year: 'Junior',
        major: 'Finance',
        focus: 'Life Sciences',
        imageUrl: './assets/headshots/headshot_igualadaDaniel.jpg',
        about: "Alexander is a junior studying Computer Science with a focus on Artificial Intelligence and Machine Learning. He’s interested in applying AI to solve real-world problems."
        },
        {
        name: 'Sam Stone',
        year: 'Senior',
        major: 'Finance',
        focus: 'Life Sciences',
        imageUrl: './assets/headshots/headshot_stoneSam.jpg',
        about: "Jaedon is a senior majoring in Finance, focusing on investments in Life Sciences. She’s passionate about biotech startups and the future of healthcare."
        },
        {
        name: 'Alexander Klein',
        year: 'Junior',
        major: 'Computer Science',
        focus: 'Artificial Intelligence/ML',
        imageUrl: './assets/headshots/headshot_kleinAlexander.jpg',
        about: "Alexander is a junior studying Computer Science with a focus on Artificial Intelligence and Machine Learning. He’s interested in applying AI to solve real-world problems."
        },
        {
        name: 'Jaedon Taylor',
        year: 'Junior',
        major: 'Computer Science',
        focus: 'Artificial Intelligence/ML',
        imageUrl: './assets/headshots/headshot_taylorJaedon.jpg',
        about: "Jaedon is a senior majoring in Finance, focusing on investments in Life Sciences. She’s passionate about biotech startups and the future of healthcare."
        },
        {
        name: 'Adam Yehya',
        year: 'Senior',
        major: 'Finance',
        focus: 'Life Sciences',
        imageUrl: './assets/headshots/headshot_yehyaAdam.jpg',
        about: "Jaedon is a senior majoring in Finance, focusing on investments in Life Sciences. She’s passionate about biotech startups and the future of healthcare."
        },
        {
        name: 'Ben Gruen',
        year: 'Sophomore',
        major: 'Finance',
        focus: 'Artificial Intelligence/ML',
        imageUrl: './assets/headshots/headshot_gruenBen.jpg',
        about: "Jaedon is a senior majoring in Finance, focusing on investments in Life Sciences. She’s passionate about biotech startups and the future of healthcare."
        }
    ];

    const openModal = (member) => {
        setSelectedMember(member);
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    return (
        <div className=''>
            <Header photo='./assets/backgroundPlazas.jpg' title='Team' headline='Meet Us'/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 min-w-screen p-8">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard
                    key={index}
                    name={member.name}
                    year={member.year}
                    major={member.major}
                    focus={member.focus}
                    imageUrl={member.imageUrl}
                    onClick={() => openModal(member)}
                    />
                ))}

                {selectedMember && (
                    <TeamMemberModal member={selectedMember} onClose={closeModal} />
                )}
            </div>
        </div>
    );
}