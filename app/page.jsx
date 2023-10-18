import Image from "next/image";
import Design from "../public/Design 1.png";
import Business from "../public/Business 2.png";
import Business3 from "../public/Business 3.png";
import Business2 from "../public/Business.png";
import Button from "@/components/Buttton/Button";
import DarkmodeToggle from "@/components/DarkmodeToggle/DarkmodeToggle";
 

const Home = () => {
  return (
    <div>
      
      <div className="grid    md:grid-cols-2 mt-10 gap-8 max-w-[1100px] mx-auto  ">
        <div className="mt-0  md:mt-14">
          <h1 className="title text-4xl font-bold w-full">
            Better design for your digital products.
          </h1>
          <p className="text-md md:text-lg my-3">
            Turning your idea into reality, we bring together the teams for the
            global tech industry{" "}
          </p>
          <Button url="/portfolio" text="See about our works" />
        </div>
        <div>
          <Image
            className="animated z-0"
            width={500}
            height={500}
            src={Design}
            alt="homepage"
          />
        </div>
      </div>
      <div className="grid    md:grid-cols-2 mt-10 gap-8 max-w-[1100px] mx-auto  ">
        <div>
          <Image
            className="animated z-0"
            width={500}
            height={500}
            src={Business2}
            alt="homepage"
          />
        </div>
        <div className="mt-0  md:mt-14">
          <h1 className="title text-4xl font-bold w-full">
            Better design for your digital products.
          </h1>
          <p className="text-md md:text-lg my-3">
            Turning your idea into reality, we bring together the teams for the
            global tech industry{" "}
          </p>
        </div>
      </div>
      <div className="fixed right-8 top-[30%]">
        <DarkmodeToggle />
      </div>
      <div className="grid    md:grid-cols-2 mt-10 gap-8 max-w-[1100px] mx-auto  ">
        <div className="mt-0  md:mt-14">
          <h1 className="title text-4xl font-bold w-full">
            Better design for your digital products.
          </h1>
          <p className="text-md md:text-lg my-3">
            Turning your idea into reality, we bring together the teams for the
            global tech industry{" "}
          </p>
        </div>
        <div>
          <Image
            className="animated z-0"
            width={500}
            height={500}
            src={Business}
            alt="homepage"
          />
        </div>
      </div>
      <div className="grid    md:grid-cols-2 mt-10 gap-8 max-w-[1100px] mx-auto  ">
        <div>
          <Image
            className="animated z-0"
            width={500}
            height={500}
            src={Business3}
            alt="homepage"
          />
        </div>
        <div className="mt-0  md:mt-14">
          <h1 className="title text-4xl font-bold w-full">
            Better design for your digital products.
          </h1>
          <p className="text-md md:text-lg my-3">
            Turning your idea into reality, we bring together the teams for the
            global tech industry{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
