import Section from "./Section";
import { banner } from "../assets";
import Heading from "./Heading";
import PricingList from "./RaterList";
//import { LeftLine, RightLine } from "./design/Pricing";

const Ratereview = () => {
  return (
    <ratereview>
      {/* <Section id="rating"> */}
      <div className="container bg-n-3 relative py-10 z-2">
        <div className="hidden relative justify-center pt-[2rem] mb-[3rem] lg:flex">
          <img
            src={banner}
            className="relative"
            width={1000}
            height={1000}
            alt="banner"
          />
        </div>

        <Heading
          tag="[ Get started with Feedify ]"
          title="View Our Ratings && Reviews"
        />

        <div className="relative">
          <PricingList />
          {/* <LeftLine /> */}
          {/* <RightLine /> */}
        </div>

        <div className="flex justify-center mt-10 pb-10">
          <p className="text-xsl font-code text-n-7 font-bold tracking-wider uppercase ">
            Be the one to Rate and Review...
          </p>
        </div>
      </div>
      {/* </Section> */}
    </ratereview>
  );
};

export default Ratereview;
