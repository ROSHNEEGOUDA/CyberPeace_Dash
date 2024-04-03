import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const QueriesSection = () => {
  const sampleQuestions = [
    "How do I reset my password?",
    "Is there a trial period for the courses?",
    "Can I download the course materials?",
    "How can I contact support?",
    "Are there any discounts available?",
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <FontAwesomeIcon icon={faQuestionCircle} className="mr-2 text-blue-600" />
        Queries
      </h2>
      <div className="text-blue-600">
        {sampleQuestions.map((question, index) => (
          <p key={index} className="mb-2">
            <span style={{ cursor: 'pointer' }}>{question}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default QueriesSection;
