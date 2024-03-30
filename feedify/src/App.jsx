import Footer from "./components/Footer";
import Teammates from "./components/Teammates";
import Insights from "./components/Insights";
import Ratereview from "./components/Ratereview";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Insights />
        <Ratereview />
        <Teammates />
        <Footer />
      </div>
    </>
  );
};

export default App;
