"use client";

import Link from "next/link";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = () => {
  const path = usePathname();
  const params = useSearchParams();
  const query = params.get("query");
  const page = params.get("page");

  return (
    <div className="flex gap-5">
      {(!page || page !== "0") && (
        <Link
          href={`${path}?query=${query}&page=${Number(page) - 1}`}
          className="flex gap-1 items-center hover:text-blue-700"
        >
          <GrFormPrevious />
          <p>Prev</p>
        </Link>
      )}
      <Link
        href={`${path}?query=${query}&page=${Number(page) + 1}`}
        className="flex gap-1 items-center hover:text-blue-700"
      >
        <p>Next</p>
        <GrFormNext />
      </Link>
    </div>
  );
};

export default Pagination;
