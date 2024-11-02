import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

const Date_Range = ({ onDateChange }) => { 
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setDate([ranges.selection]);
    if (onDateChange) {  
      onDateChange(startDate, endDate);
    }
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 m-4 sm:m-6 md:m-8 bg-white rounded-lg shadow-lg items-center justify-center">
      
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 w-full mb-4">
        <div className="flex w-full md:w-auto mb-2 md:mb-0">
          <input
            type="text"
            value={`${date[0].startDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} - ${date[0].endDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}`} 
            readOnly
            onClick={() => setShowDatePicker(!showDatePicker)} 
            className="w-full md:w-auto m-2 p-3 font-semibold border focus:outline-none cursor-pointer"
          />
        </div>
      </div> 

      <div className="flex flex-col md:flex-row w-full ">
        <div className="w-full md:w-1/2 p-2 border-r border mb-4 md:mb-0">
          <div className="space-y-2 border-b">
            <button className="font-bold block w-full text-left px-2 py-1 text-blue-500 hover:bg-gray-100 rounded border-b">Today</button>
            <button className="font-bold block w-full text-left px-2 py-1 hover:bg-gray-100 rounded border-b">Yesterday</button>
            <button className="font-bold block w-full text-left px-2 py-1 hover:bg-gray-100 rounded border-b">This Week</button>
            <button className="font-bold block w-full text-left px-2 py-1 hover:bg-gray-100 rounded border-b">Last Week</button>
            <button className="font-bold block w-full text-left px-2 py-1 hover:bg-gray-100 rounded border-b">This Month</button>
            <button className="font-bold block w-full text-left px-2 py-1 hover:bg-gray-100 rounded border-b">Last Month</button>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">1</span>
              <span className="m-1">days up to today</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">1</span>
              <span>days starting today</span>
            </div>
          </div>
        </div>
                
        <div className="flex-grow p-2 md:p-4">
          {showDatePicker && ( 
            <DateRange
              ranges={date}
              onChange={handleSelect}
              className="date-range-picker"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Date_Range;

