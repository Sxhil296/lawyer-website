import React from 'react';
import { FaPhone } from 'react-icons/fa';

const DirectCallButton = () => {
  const lawyerPhoneNumber = '1234567890'; // Replace with the actual phone number

  return (
    <a
      href={`tel:${lawyerPhoneNumber}`}
      className="fixed bottom-20 right-4 bg-accent text-white p-3 rounded-sm hover:bg-accent-hover transition"
    >
      <FaPhone size={24} />
    </a>
  );
};

export default DirectCallButton;