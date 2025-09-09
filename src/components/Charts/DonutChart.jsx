import React from 'react';

const DonutChart = ({ data }) => {
  const { failed, warning, notAvailable, passed } = data;
  const total = failed + warning + notAvailable + passed;
  
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <svg className="w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="#E5E7EB"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="#10B981"
            strokeWidth="12"
            fill="none"
            strokeDasharray={`${(passed / total) * 226} 226`}
            className="transform -rotate-90 origin-center"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold">{total}</span>
          <span className="text-xs text-gray-500">Total</span>
        </div>
      </div>
      <div className="ml-4 text-xs space-y-1">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          <span>Failed ({failed})</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
          <span>Warning ({warning})</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
          <span>Not Available ({notAvailable})</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span>Passed ({passed})</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;