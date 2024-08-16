import React, { useState } from 'react';
import './dash.css';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    categories: [
      {
        categoryName: 'CSPM Executive Dashboard',
        widgets: [
          { widgetId: '1', widgetName: 'Widget 1', widgetText: 'This is some random text for Widget 1' },
          { widgetId: '2', widgetName: 'Widget 2', widgetText: 'This is some random text for Widget 2' }
        ]
      },
      {
        categoryName: 'Security Insights',
        widgets: [
          { widgetId: '3', widgetName: 'Widget 3', widgetText: 'This is some random text for Widget 3' }
        ]
      }
    ]
  });

  const [searchTerm, setSearchTerm] = useState('');

  const addWidget = (categoryIndex) => {
    const widgetName = prompt("Enter widget name:");
    const widgetText = prompt("Enter widget text:");

    if (!widgetName || !widgetText) return;

    const newWidget = {
      widgetId: new Date().getTime().toString(),
      widgetName: widgetName,
      widgetText: widgetText
    };

    const newDashboardData = { ...dashboardData };
    newDashboardData.categories[categoryIndex].widgets.push(newWidget);
    setDashboardData(newDashboardData);
  };

  const removeWidget = (categoryIndex, widgetIndex) => {
    const newDashboardData = { ...dashboardData };
    newDashboardData.categories[categoryIndex].widgets.splice(widgetIndex, 1);
    setDashboardData(newDashboardData);
  };

  const filteredWidgets = dashboardData.categories.flatMap(category =>
    category.widgets.filter(widget =>
      widget.widgetName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {dashboardData.categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category">
          <h2>{category.categoryName}</h2>
          {category.widgets.map((widget, widgetIndex) => (
            <div key={widget.widgetId} className="widget">
              <div className="widget-header">
                <h3>{widget.widgetName}</h3>
                <button className="remove-widget-btn" onClick={() => removeWidget(categoryIndex, widgetIndex)}>
                  &times;
                </button>
              </div>
              <p>{widget.widgetText}</p>
            </div>
          ))}
          <button className="add-widget-btn" onClick={() => addWidget(categoryIndex)}>Add Widget</button>
        </div>
      ))}

      <div className="widget-list">
        <h3>All Widgets</h3>
        <ul>
          {filteredWidgets.map((widget) => (
            <li key={widget.widgetId}>
              {widget.widgetName} - {widget.widgetText}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
