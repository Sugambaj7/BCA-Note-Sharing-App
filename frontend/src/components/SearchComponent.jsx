import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  return (
    <div className="mr-2">
      <form>
        <div className="flex w-[100%]">
          <input
            className="search w-[90%] h-[40px] p-2 text-black"
            placeholder="search"
          ></input>
          <Link to="/search">
            <button className="bg-pink-400 h-[40px] text-xl text-white  px-2 p-1">
              <CiSearch />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
