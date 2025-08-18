import React from 'react';

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      title: 'Kentää hoitaja',
      company: 'Tornio Golf',
      duration: 'Jun 2025 - Sept 2025',
      description: 'Vastuussa golfkentän ylläpidosta, mukaan lukien nurmikon leikkaus, simmaus ja yleinen huolto viheriöillä ja väylillä.',
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', color: '#333' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2rem', marginBottom: '20px' }}>Experience</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {experiences.map((exp, index) => (
          <li key={index} style={{ marginBottom: '15px', border: '1px solid #e0e0e0', padding: '15px', borderRadius: '8px', backgroundColor: '#fafafa', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ margin: '0', color: '#2980b9', fontSize: '1.5rem' }}>{exp.title}</h2>
            <h3 style={{ margin: '0', color: '#34495e', fontSize: '1.2rem' }}>{exp.company}</h3>
            <p style={{ margin: '5px 0', fontStyle: 'italic' }}>{exp.duration}</p>
            <p style={{ margin: '5px 0', color: '#7f8c8d' }}>{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperiencePage;