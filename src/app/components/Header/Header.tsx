import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex gap-2 items-center">
        <Link href="https://mail.google.com/mail/" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://images.google.com/" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="cursor-pointer bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-600 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
