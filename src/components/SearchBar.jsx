import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") return;
    console.log("Searching for:", query);
    // 👉 You can connect to backend, filter items, or navigate with query
  };

  const clearSearch = () => setQuery("");

  return (
    <div className="bg-white w-4/5  rounded-full shadow flex items-center justify-between m-4 px-4 py-2 ">
      {/* Input */}
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" text-gray-700 font-kaushan outline-none"
      />

      {/* Clear button (X) - only show if text exists */}
      {query && (
        <button
          onClick={clearSearch}
          className="ml-2 text-gray-500 hover:text-gray-700"
        >
          <span className="material-icons">close</span>
        </button>
      )}

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="ml-2 text-gray-500 hover:text-gray-700"
      >
        <span className="material-icons">search</span>
      </button>
    </div>
  );
}
