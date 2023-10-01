import Image from "next/image";
import HomeSearch from "./components/HomeSearch";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <Image src="/google.png" alt="google" width={300} height={200} />
      <HomeSearch />
    </div>
  );
};

export default Home;
