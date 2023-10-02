import { IRes } from "@/app/search/web/page";
import Link from "next/link";

const ResultsImage = ({ res }: { res: IRes }) => {
  return (
    <div className="pb-24 mt-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {res.items?.map((el) => (
          <div key={el.link} className="mb-8">
            <div className="group">
              <Link href={el.image.contextLink}>
                <img
                  src={el.link}
                  alt={el.title}
                  className="h-60 group-hover:shadow-xl w-full object-cover transition-shadow"
                />
              </Link>
              <Link href={el.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {el.title}
                </h2>
              </Link>
              <Link href={el.image.contextLink}>
                <p className="group-hover:underline truncate text-gray-600">
                  {el.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsImage;
