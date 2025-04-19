import React from 'react';

const CardItem = ({ title, value, description, color = "text-gray-500" }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-xl">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
      <p className={`text-sm ${color}`}>{description}</p>
    </div>
  );
};

export default CardItem;
