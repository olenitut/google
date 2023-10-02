"use client";

import { useState, FormEvent } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Spinner from "../../Spinner/Spinner";

type ISearchType = "home" | "search";

const HomeSearch = ({ type = "home" }: { type?: ISearchType }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSibmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?query=${search}`);
  };

  const randomSearch = async () => {
    setLoading(true);

    const res = await fetch(`https://random-word-api.herokuapp.com/word`);
    const data = await res.json();

    router.push(`/search/web?query=${data[0]}`);
  };

  return (
    <>
      <form
        onSubmit={handleSibmit}
        className="w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl flex flex-col gap-5 items-center"
      >
        <div className="flex items-center w-full mx-auto  border border-gray-200 px-5  h-12 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl">
          {type === "home" && (
            <AiOutlineSearch className="text-xl text-gray-400 mr-3 font-bold" />
          )}
          <input
            type="text"
            className="flex-grow focus:outline-none h-full"
            value={search}
            onChange={(el) => setSearch(el.target.value)}
          />
          {type === "search" && (
            <div className="flex gap-2 items-center">
              <AiOutlineClose
                className="text-l text-gray-400 font-bold cursor-pointer"
                onClick={() => setSearch("")}
              />
              <div className="h-7 w-[1px] bg-gray-300" />
              <AiOutlineSearch className="text-l text-blue-600 font-bold" />
            </div>
          )}
        </div>
        {type === "home" && (
          <div className="flex gap-3 mt-3 text-gray-800 ">
            <button className="btn" type="submit">
              Google Search
            </button>
            <button
              className="btn relative"
              type="button"
              onClick={randomSearch}
              disabled={loading}
            >
              <p className={loading ? "opacity-5 transition-opacity" : ""}>
                "I am Feeling Lucky"
              </p>
              {loading && (
                <Spinner className="absolute top-1/2 left-1/2 transform translate-y-[-50%] translate-x-[-50%]" />
              )}
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default HomeSearch;
