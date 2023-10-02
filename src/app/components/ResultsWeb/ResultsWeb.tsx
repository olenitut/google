import { IRes } from "@/app/search/web/page";
import Link from "next/link";
import parse from "html-react-parser";
import Pagination from "../Pagination/Pagination";

const ResultsWeb = ({ res }: { res: IRes }) => {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:px-[18%]">
      <p className="text-gray-500 text-sm mb-5 mt-5">
        About {res.searchInformation?.formattedTotalResults} results (
        {res.searchInformation?.formattedSearchTime} seconds)
      </p>
      {res.items?.map((el) => (
        <div key={el.title} className="mb-8 max-w-4xl">
          <div className="group flex flex-col">
            <Link href={el.link} className="text-sm truncate">
              {el.formattedUrl}
            </Link>
            <Link
              href={el.link}
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
            >
              {el.title}
            </Link>
          </div>
          <div className="text-gray-600">{parse(el.htmlSnippet)}</div>
        </div>
      ))}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ResultsWeb;
