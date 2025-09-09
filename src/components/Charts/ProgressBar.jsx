import React from 'react';

const ProgressBar = ({ data }) => {
  const { total, critical, high, medium, low } = data;
  
  const getWidth = (value) => `${(value / total) * 100}%`;
  
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-gray-700">
        {total} Total vulnerabilities
      </div>
      <div className="h-8 bg-gray-200 rounded-lg overflow-hidden flex">
        {critical > 0 && (
          <div 
            className="bg-red-500 h-full" 
            style={{ width: getWidth(critical) }}
          />
        )}
        {high > 0 && (
          <div 
            className="bg-orange-500 h-full" 
            style={{ width: getWidth(high) }}
          />
        )}
        {medium > 0 && (
          <div 
            className="bg-yellow-500 h-full" 
            style={{ width: getWidth(medium) }}
          />
        )}
        {low > 0 && (
          <div 
            className="bg-blue-500 h-full" 
            style={{ width: getWidth(low) }}
          />
        )}
      </div>
      <div className="flex justify-between text-xs text-gray-600">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
          Critical ({critical})
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span>
          High ({high})
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;