import React from "react";
import { MdOutlinePriceChange } from "react-icons/md";
import { SiVisa } from "react-icons/si";
import JazzCashIcon from "../assets/th.jpeg";
import CreditCard from "../assets/OIP.jpeg";
import EasyPesa from "../assets/easy.jpeg";

function Payment_page() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6 md:p-16 bg-gray-100 min-h-screen space-y-6 md:space-y-0">
      <div className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-2">Payment Type</h2>
        <p className="text-sm text-gray-500 mb-6">
          All transactions are secure and encrypted
        </p>

        <div className="space-y-4 mt-12">
          <label className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition">
            <input
              type="radio"
              name="payment"
              className="form-radio text-yellow-500"
            />
            <span className="flex items-center justify-between w-full ">
              PAYFAST (Pay via Debit/Credit/Wallet/Bank Account/Jazz Cash)
              <div className="flex items-center space-x-1">
                <SiVisa className="w-6 h-6 text-gray-600" />
                <img src={CreditCard} alt="CreditCard" className="w-6 h-6" />
              </div>
            </span>
          </label>

          <label className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition">
            <input
              type="radio"
              name="payment"
              className="form-radio text-yellow-500"
            />
            <span className="flex items-center justify-between w-full">
            Jazz Cash
            <img src={JazzCashIcon} alt="JazzCash" className="w-6 h-6" />
            </span>
          </label>

          <label className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition">
            <input
              type="radio"
              name="payment"
              className="form-radio text-yellow-500"
            />
            <span className="flex items-center justify-between w-full">
            Easy Pesa
            <img src={EasyPesa} alt="Easypesa" className="w-6 h-6" />
            </span>
          </label>
        </div>

        <div className="flex items-center mt-10">
          <input type="checkbox" className="form-checkbox text-yellow-500" />
          <span className="ml-2 text-sm text-gray-600">
            Save this information for next time
          </span>
        </div>
        <button className="mt-12 font-bold w-full bg-yellow-500 text-black py-3 rounded hover:bg-yellow-600 transition duration-200">
          Complete Order
        </button>
      </div>

      <div className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-md">
        <div className="flex items-center justify-between mb-4 border p-3 font-bold">
          <span className="flex items-center">
            <MdOutlinePriceChange />
            Price
          </span>
          <span className="font-bold">PKR 27,510</span>
        </div>

        <div className="flex justify-between items-center w-full space-x-4">
          <label className="text-gray-500">Coupon Code</label>
          <div className="flex flex-col md:flex-row w-1/2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-300 p-2 rounded-l w-full focus:outline-none "
            />
            <button className="bg-yellow-500 text-black px-4 rounded-r font-bold">
              Redeem
            </button>
          </div>
      </div>

        <div className="space-y-5 mb-6">
          <div className="flex justify-between text-gray-500 py-2">
            <span>Subtotal</span>
            <span>PKR 27,450</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Discount</span>
            <span>-</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Add. Charges</span>
            <span>-</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Sales Tax (2%)</span>
            <span>PKR (550)</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Payable Amount</span>
            <span>PKR 27,510</span>
          </div>
        </div>

        <p className="text-xs text-black mb-6 font-bold">
          By continuing, you have read & accepted the{" "}
          <a href="#" className="text-blue-500 underline">
            Terms of Service
          </a>
        </p>
        <button className="w-full bg-yellow-200 text-gray-500 py-3 rounded hover:bg-yellow-300 transition">
          Claim 100% refund within 15 days after training starts.
        </button>
      </div>
    </div>
  );
}

export default Payment_page;
