import React from "react";
import Image from "next/image";
import Business2 from "../../public/Photography 2.png";
import Button from "@/components/Buttton/Button";

const about = () => {
  return (
    <div className="max-w-[1100px] mx-auto ">
      {/* Image Section */}
      <div className="relative">
        <Image width={500} height={500} className="w-full image md:w-[100%] md:h-[250px] sm:h-[200px] z-0" src={Business2} />
   <div className="absolute left-[20px] bottom-[20px] bg-[#05a371] w-fit px-3 py-1">
     <h1 className="text-xl md:text-3xl font-bold ">Digital Storytellers</h1>
     <p className="text-md md:text-xl">Handcrafting award whining digital experiences</p>
   </div>
      </div>

      {/* Duties */}
      <div className="grid md:grid-cols-2 mt-6 gap-8">
        <div>
          <h1 className="text-2xl font-bold  md:text-4xl sm:text-3xl my-3"> Who Are We?</h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et,
            doloremque nam autem quam, odit possimus veniam omnis, sed quae ex
            dolorem
            <br />
            distinctio? A dolore veniam vel facilis distinctio delectus.
          </p>
          <br />
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            facere saepe? Perferendis omnis ea, atque soluta tempora sed at
            earum. Praesentium, ipsum quibusdam atque accusamus quia nesciunt
            ullam hic earum.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold  md:text-4xl sm:text-3xl my-3"> What We Do?</h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et,
            doloremque nam autem quam, odit possimus veniam omnis, sed quae ex
            dolorem
            <br />
            distinctio? A dolore{" "}
          </p>
          <br />
          <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
          <br />
         <p className="text-md mb-4 "> excepturi sed iste voluptate vel.</p>
         <Button  url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default about;
