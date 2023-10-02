import Image from "next/image";
import Link from "next/link";
import Actions from "./Actions/Actions";
import SearchOptions from "./SearchOptions/SearchOptions";
import HomeSearch from "../Home/components/HomeSearch";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white pb-4">
      <div className="flex justify-between items-center sm:px-20 sm:py-7 p-2">
        <div className="flex-1 flex items-center">
          <Link href="/" className="mr-3 sm:mr-14">
            <Image src="/google.png" width={100} height={30} alt="google" />
          </Link>
          <HomeSearch type="search" />
        </div>
        <Actions />
      </div>
      <SearchOptions />
    </header>
  );
};

export default SearchHeader;
