import React from 'react';

const Home = () => {
  const successCases = [
    '2025-07-15', 
    '2025-08-10', 
    '2025-09-05', 
    '2025-10-15', 
    '2025-11-08', 
    '2025-12-05'
  ];

  const policyDates = [
    '2025-07',
    '2025-08',
    '2025-09',
    '2025-10',
    '2025-11',
    '2025-12'
  ];

  return (
    <div>
      <h1>Welcome to Our Service</h1>
      <p>Success Cases:</p>
      <ul>
        {successCases.map(date => <li key={date}>{date}</li>)}
      </ul>
      <p>Policies Dates:</p>
      <ul>
        {policyDates.map(date => <li key={date}>{date}</li>)}
      </ul>
      <p>Background information updated with new date references for the second half of 2025.</p>
    </div>
  );
};

export default Home;