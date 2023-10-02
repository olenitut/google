import Image from "next/image";
import Link from "next/link";
import SearchForm from "./SearchForm/SearchForm";
import Actions from "./Actions/Actions";
import SearchOptions from "./SearchOptions/SearchOptions";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex-1 flex">
          <Link href="/">
            <Image src="/google.png" width={100} height={30} alt="google" />
          </Link>
          <SearchForm />
        </div>
        <Actions />
      </div>
      <SearchOptions />
    </header>
  );
};

export default SearchHeader;
