import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../Search/SearchBar';
import Category from '../Category/Category';
import AddWidgetModal from '../Widget/AddWidgetModal';
import { toggleAddWidgetModal } from '../../store/slices/dashboardSlice';
import { RefreshCw } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { categories, searchQuery, isAddWidgetModalOpen } = useSelector(state => state.dashboard);

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">CNAPP Dashboard</h1>
          <div className="flex items-center gap-4">
            <SearchBar />
            <button className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-shadow">
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </button>
            <select className="px-4 py-2 rounded-lg bg-white shadow text-sm">
              <option>Last 2 days</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredCategories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      {isAddWidgetModalOpen && <AddWidgetModal />}
    </div>
  );
};

export default Dashboard;