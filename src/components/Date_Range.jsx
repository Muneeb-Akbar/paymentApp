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
    // </div>
  );
};

export default Date_Range;

