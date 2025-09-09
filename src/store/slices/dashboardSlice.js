import { createSlice } from '@reduxjs/toolkit';
import initialData from '../../data/initialData.json';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    categories: initialData.categories,
    searchQuery: '',
    isAddWidgetModalOpen: false,
    selectedCategory: null,
  },
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push({
          ...widget,
          id: `widget-${Date.now()}`,
        });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleAddWidgetModal: (state, action) => {
      state.isAddWidgetModalOpen = action.payload.isOpen;
      state.selectedCategory = action.payload.categoryId || null;
    },
  },
});

export const { addWidget, removeWidget, setSearchQuery, toggleAddWidgetModal } = dashboardSlice.actions;
export default dashboardSlice.reducer;