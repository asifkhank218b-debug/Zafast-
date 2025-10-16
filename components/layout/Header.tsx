
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-base-200/50 border-b border-base-300 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold text-content-strong">Welcome to Zafast AI</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-content hover:text-content-strong">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white font-bold">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
