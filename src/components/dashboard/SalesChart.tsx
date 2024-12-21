import React from 'react';

export function SalesChart() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Sales Analytics</h2>
        <select className="p-2 border border-gray-200 rounded-lg text-sm">
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="90days">Last 90 Days</option>
        </select>
      </div>
      <div className="h-80 flex items-center justify-center text-gray-500">
        Chart will be implemented with a charting library
      </div>
    </div>
  );
}