import React from "react";
import Image from "next/image";
import Business3 from "../../public/Business 3.png";
import Button from "@/components/Buttton/Button";


export const metadata = {
  title  :"contact page",
  description : "UthmanCoder Contact-Page"
}


const Contact = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <h1 className="text-white text-center text-2xl md:text-3xl font-bold">
        Let's Keep in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-8 ">
        <div>
          <Image className="animated" width={500} height={500} src={Business3} />
        </div>

        <div>
          <input type="text"  placeholder="Name" className="border border-gray-300 bg-inherit w-full my-2 p-2 rounded-md"/>
          <input type="email"  placeholder="Email" className="border border-gray-300 bg-inherit w-full my-2 p-2 rounded-md"/>
          <textarea className="bg-inherit w-full border rounded-md border-gray-300 my-2 p-2" name="message" id="message" cols="20" rows="6" placeholder="Message"></textarea>
          <Button url="/home" text="Send"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
