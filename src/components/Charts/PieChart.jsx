import React from 'react';

const PieChart = ({ data }) => {
  const { connected, notConnected } = data;
  const total = connected + notConnected;
  const connectedPercentage = (connected / total) * 100;
  
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="#E5E7EB"
            strokeWidth="24"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="#3B82F6"
            strokeWidth="24"
            fill="none"
            strokeDasharray={`${connectedPercentage * 2.26} 226`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{connected}</span>
          <span className="text-xs text-gray-500">Total: {total}</span>
        </div>
      </div>
      <div className="ml-4 text-xs">
        <div className="flex items-center mb-1">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          <span>Connected ({connected})</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
          <span>Not Connected ({notConnected})</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;