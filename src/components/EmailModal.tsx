import React from 'react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose, email }) => {
  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!'); // Optional: Show a notification
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">You can reach me at:</p>
        <p className="text-lg font-semibold mb-4">{email}</p>
        <div className="flex justify-between">
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Copy
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal; 