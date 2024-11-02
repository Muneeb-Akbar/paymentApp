import React, { useState } from "react";
import Image from '../assets/Office.png';

const CareersPage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (jobIndex) => {
    setOpenDropdown(openDropdown === jobIndex ? null : jobIndex);
  };

  return (
    <div className="container mx-auto m-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h2 className="text-red-500 text-4xl font-semibold">Careers</h2>
          <p className="text-black border-b mt-3 mr-36 pb-5 border-b-gray-800">
            Lorem ipsum dolor sit amet consectetur. Adipiscing in ut nec blandit elit egestas. Et elit dictum quis nisl diam euismod tincidunt quis ac. Velit venenatis id adipiscing sagittis sem non urna nunc elementum. Vulputate id pellentesque a at cum interdum turpis.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={Image} alt="Team illustration" className="w-85 h-50" />
        </div>
      </div>

      <div className="flex justify-center my-8">
        <button className="bg-blue-950 text-white py-2 px-6 rounded-full transition">
          Company presentation
        </button>
      </div>

      <div className="space-y-4 cursor-pointer custom-shadow">
        {[1, 2, 3].map((job, index) => (
          <div key={index} className="border-gray-300 pb-4">
            <div 
              className="bg-white flex justify-between items-center rounded-lg hover:bg-blue-950 hover:text-white transition-shadow" 
              style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)' }} 
              onClick={() => toggleDropdown(index)}  
            >
              <span className="font-medium px-3 py-4">Job Title : Software Engineer</span>
              <button className="text-gray-600 px-4 py-2 rounded-lg transition hover:text-white">
                {openDropdown === index ? "▲" : "▼"}
              </button>
            </div>

            {openDropdown === index && (
              <div className="mt-4 p-4 bg-gray-50 text-gray-700 rounded-lg flex flex-col items-center ">
                <h2 className="text-center font-semibold">Description:</h2>
                <p className="text-left mt-3 mx-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos temporibus non soluta ducimus. Inventore, perferendis earum. Commodi dolore mollitia optio tempora debitis ullam alias praesentium. Esse odit sequi id, magnam cumque ab dolorem hic temporibus minus impedit, dicta suscipit tempore! Praesentium, veritatis quaerat magnam laudantium nisi obcaecati ad quasi.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;
