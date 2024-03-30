import Footer from "./components/footer";
import Insights from "./components/Insights";

const App = () => {
  return (
    <>
      <div
        className="pt-[4.75 rem] lg:pt-[5.25 rem]
overflow-hidden"
      >
        <Insights/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
