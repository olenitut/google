import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

const Actions = () => {
  return (
    <div className="hidden md:flex gap-1">
      <RiSettings3Line className="header-icon" />
      <TbGridDots className="header-icon" />
      <button className="btn-blue ml-3">Sign in</button>
    </div>
  );
};

export default Actions;
