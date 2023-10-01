import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
