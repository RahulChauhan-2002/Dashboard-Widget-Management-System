import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../../store/slices/dashboardSlice';
import PieChart from '../Charts/PieChart';
import DonutChart from '../Charts/DonutChart';
import ProgressBar from '../Charts/ProgressBar';
import { X } from 'lucide-react';

const WidgetCard = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  const renderContent = () => {
    switch (widget.type) {
      case 'pie':
        return <PieChart data={widget.data} />;
      case 'donut':
        return <DonutChart data={widget.data} />;
      case 'progress':
        return <ProgressBar data={widget.data} />;
      case 'text':
      default:
        return (
          <div className="flex items-center justify-center h-full text-gray-500">
            {widget.data || 'No data available'}
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 relative group min-h-[200px]">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 p-1 rounded-full bg-white shadow opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4 text-gray-600" />
      </button>
      <h3 className="text-sm font-semibold text-gray-700 mb-3">{widget.name}</h3>
      <div className="h-32">
        {renderContent()}
      </div>
    </div>
  );
};

export default WidgetCard;