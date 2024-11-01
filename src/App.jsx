
import React from "react";
import Date_Range from "./components/Date_Range";
import Payment_page from "./components/Payment_page";
// import Career from "./components/Career";

function App() {
  const handleDateRangeChange = (start, end) => {
    console.log("Selected Start Date:", start);
    console.log("Selected End Date:", end);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 space-y-6">
      <div className="w-full">
        <Payment_page />
      </div>
      <div>
        <Date_Range onDateChange={handleDateRangeChange} />
      </div>
    </div>
  );
}

export default App;
