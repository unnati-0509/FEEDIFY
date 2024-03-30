import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Ratereview";
import Teammates from "./components/Teammates";
import Insights from "./components/Insights";
import Ratereview from "./components/Ratereview";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Header /> */}
        <Insights />
        {/* <Hero /> */}
        {/* <Collaboration /> */}
        {/* <Services /> */}
        <Ratereview />
        <Teammates />
        <Footer />
      </div>

      {/* <ButtonGradient /> */}
    </>
  );
};

export default App;
