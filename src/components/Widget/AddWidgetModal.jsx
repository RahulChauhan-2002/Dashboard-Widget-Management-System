import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, toggleAddWidgetModal } from '../../store/slices/dashboardSlice';
import { X } from 'lucide-react';

const AddWidgetModal = () => {
  const dispatch = useDispatch();
  const { selectedCategory, categories } = useSelector(state => state.dashboard);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedWidgets, setSelectedWidgets] = useState({});

  const handleClose = () => {
    dispatch(toggleAddWidgetModal({ isOpen: false }));
  };

  const handleConfirm = () => {
    if (selectedCategory && widgetName && widgetText) {
      dispatch(addWidget({
        categoryId: selectedCategory,
        widget: {
          name: widgetName,
          type: 'text',
          data: widgetText,
        }
      }));
      handleClose();
    }
  };

  const handleWidgetToggle = (categoryId, widgetName) => {
    setSelectedWidgets(prev => ({
      ...prev,
      [`${categoryId}-${widgetName}`]: !prev[`${categoryId}-${widgetName}`]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Add Widget</h3>
          <button onClick={handleClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">
            Personalize your dashboard by adding the following widget
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Widget Name
              </label>
              <input
                type="text"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter widget name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Widget Text
              </label>
              <textarea
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Enter widget text/data"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Category
              </label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {categories.map(category => (
                  <div key={category.id} className="space-y-1">
                    <div className="font-medium text-sm text-gray-700">{category.name}</div>
                    {category.widgets.map(widget => (
                      <label
                        key={widget.id}
                        className="flex items-center space-x-2 ml-4 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedWidgets[`${category.id}-${widget.name}`] || false}
                          onChange={() => handleWidgetToggle(category.id, widget.name)}
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-600">{widget.name}</span>
                      </label>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-4 border-t">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;