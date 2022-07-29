import React, { useEffect, useState } from "react";

const SearchForm = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. politics"
          className="py-1 px-2 rounded-l-lg"
          onChange={(e) => setText(e.target.value)}
        ></input>

        <button
          type="submit"
          className="bg-green-400 py-1 px-2 rounded-r-lg text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
