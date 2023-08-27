import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChatIcon = () => {
  const phoneNumber = '1234567890'; // Replace with the actual phone number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-sm hover:bg-green-600 transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppChatIcon;

