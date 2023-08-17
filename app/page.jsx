import Image from "next/image";
import Design from "../public/Design 1.png";
import Button from "@/components/Buttton/Button";

const Home = () => {
  return (
    <div className="grid    md:grid-cols-2 mt-5 gap-8 max-w-[1100px] mx-auto ">
      <div className="mt-0  md:mt-14">
        <h1 className="title text-4xl font-bold w-full">Better design for your digital products.</h1>
        <p className="text-md md:text-lg my-3">Turning your idea into reality, we bring together the teams for the global tech industry </p>
       <Button url="/portfolio" text="See about our works"/>
      </div>
      <div>
        <Image className="animated z-0" width={500} height={500} src={Design} />
      </div>
    </div>
  );
};
export default Home;
