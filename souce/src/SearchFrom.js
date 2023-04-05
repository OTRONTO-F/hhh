import React, { useState } from "react";

const SearchForm = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search for articles"
            className="border-2 border-gray-400 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-green-500"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
