"use client";

import Link from "next/link";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import { usePathname, useSearchParams } from "next/navigation";

const SearchOptions = () => {
  const params = useSearchParams();
  const query = params.get("query");
  const path = usePathname();

  const activeLink = path.includes("image") ? 2 : 1;

  return (
    <div className="flex w-full border-b-[1px] gap-5 text-sm">
      <Link
        className={`flex gap-1 items-center pb-3 border-b-4 border-transparent ml-[18%] ${
          activeLink === 1 && "text-blue-700 !border-blue-700"
        }`}
        href={`/search/web?query=${query}`}
      >
        <AiOutlineSearch />
        <p>All</p>
      </Link>
      <Link
        className={`flex gap-1 items-center pb-3 border-b-4 border-transparent  ${
          activeLink === 2 && "text-blue-700 !border-blue-700"
        }`}
        href={`/search/image?query=${query}`}
      >
        <AiOutlineCamera />
        <p>Images</p>
      </Link>
    </div>
  );
};

export default SearchOptions;
