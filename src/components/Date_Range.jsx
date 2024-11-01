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

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setDate([ranges.selection]);
    if (onDateChange) {  
      onDateChange(startDate, endDate);
    }
  };

  return (

    <div className="flex p-4 m-16 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-4 border-b space-4">
        <div className="flex">
        <input
            type="text"
            value={`${date[0].startDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}  -  ${date[0].endDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}`} 
            readOnly
            className="m-2 p-3 font-semibold w-full border  focus:outline-none"
        />
        </div>
    
        <div className="flex border p-2 m-2 space-x-4">
          <label className=" font-bold  text-gray-600 m-1">Select Gender</label>
          <select className="focus:outline-none">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

        <div className="w-1/8 p-4 border-r border">
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
              <span className="w-8 h-8  bg-blue-100 rounded-lg flex items-center justify-center ">1</span>
              <span>days up to today</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className=" w-8 h-8  bg-blue-100 rounded-lg flex items-center justify-center">1</span>
              <span>days starting today</span>
            </div>
          </div>
        </div>
                
        <div className="flex-grow p-4">
          <DateRange
            ranges={date}
            onChange={handleSelect}
            className="date-range-picker" />
        </div>
      </div>
  );
};

export default Date_Range;
