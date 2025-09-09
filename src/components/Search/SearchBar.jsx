import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../store/slices/dashboardSlice';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.dashboard.searchQuery);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search widgets..."
        className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;