import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex gap-3 items-center">
        <Link href="https://mail.google.com/mail/" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://images.google.com/" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="header-icon" />
        <button className="btn-blue">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
