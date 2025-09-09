import React from 'react';
import { useDispatch } from 'react-redux';
import WidgetCard from '../Widget/WidgetCard';
import { toggleAddWidgetModal } from '../../store/slices/dashboardSlice';
import { Plus } from 'lucide-react';

const Category = ({ category }) => {
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    dispatch(toggleAddWidgetModal({ isOpen: true, categoryId: category.id }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map(widget => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            categoryId={category.id}
          />
        ))}
        <button
          onClick={handleAddWidget}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-colors min-h-[200px]"
        >
          <Plus className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-gray-600 font-medium">Add Widget</span>
        </button>
      </div>
    </div>
  );
};

export default Category;