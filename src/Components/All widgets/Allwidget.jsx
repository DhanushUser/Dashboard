import React, { useState } from 'react';
import './widgets.css';

const Allwidget = ({ setAllWidget, addWidgetToCategory }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgets, setWidgets] = useState([]);

  const removeWidget = () => {
    setAllWidget(false);
  };

  const handleAddWidget = () => {
    if (widgetName.trim()) {
      const newWidget = { id: Date.now(), name: widgetName, text: 'Random Text' };
      setWidgets([...widgets, newWidget]);
      setWidgetName('');
    }
  };

  const handleRemoveWidget = (id) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  const handleConfirm = () => {
    widgets.forEach(widget => {
      addWidgetToCategory('CSPM Executive Dashboard', widget);
    });
    setWidgets([]);
    setAllWidget(false);
  };

  return (
    <div className='widgets'>
      <div className="widget-details bg-white">
        <div className="w-title flex justify-between items-center w-full h-[40px] bg-blue-800 text-white p-3">
          <h4 className='text-md font-[550] uppercase'>All Widgets</h4>
          <i onClick={removeWidget} className='text-2xl'>
            <i className='bx bx-x text-red-100 cursor-pointer hover:bg-red-700 hover:text-white'></i>
          </i>
        </div>

        <p className='text-[14px] my-3 mx-3'>Personalize your dashboard by adding the following widget</p>

        <div className="add-input">
          <div className="input-title mb-[30px]">
            <p className='ml-5 border-b border-b-blue-700 font-medium pb-4'>CSPM</p>
          </div>

          <div className="input ml-5">
            <input 
              type="text" 
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className='w-[60%] text-sm placeholder:text-[12px] px-2 h-[40px] mr-3 bg-slate-300 rounded-md border-none outline-none' 
              placeholder='Add your widgets' 
            />
            <button 
              onClick={handleAddWidget} 
              className='px-2 py-1 bg-blue-700 text-white rounded-md h-[40px] w-[50px] text-sm cursor-pointer'
            >
              Add
            </button>
          </div>

          <div className='add-details'>
            {widgets.map(widget => (
              <div key={widget.id} className='widget-item mx-5 my-4 flex justify-between items-center border border-blue-400 p-3 mb-2 w-[90%]'>
                <p className='font-[450]'>{widget.name}</p>
                <button 
                  onClick={() => handleRemoveWidget(widget.id)} 
                  className='remove-widget-btn text-red-600'
                >
                  <i class='bx bxs-x-circle' ></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="confirm absolute bottom-0 mb-8 mr-5 right-0">
          <button onClick={removeWidget} className='px-2 py-1 font-semibold text-sm border-[1px] text-blue-900 border-black bg-transparent rounded-sm'>
            Cancel
          </button>
          <button onClick={handleConfirm} className='px-2 py-1 font-semibold text-sm bg-blue-900 text-white mx-2 rounded-sm'>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Allwidget;
