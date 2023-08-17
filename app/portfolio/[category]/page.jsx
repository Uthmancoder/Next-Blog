import Button from "@/components/Buttton/Button";
import React from "react";
import Image from "next/image";
import Business from "../../../public/Business.png";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="max-w-[1100px] mx-auto">
      <h1 className="uppercase text-xl font-bold">{params.category}</h1>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`grid md:grid-cols-2 gap-8 my-6 ${
            item.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}

        >
          <div className="mt-4 md:mt-16">
            <h1 className="text-xl md:text-4xl font-bold">{item.title}</h1>
            <p className="text-md my-5">{item.desc}</p>
            <Button url="/seemore" text="See More" />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="md:h-[300px] bg-contain"
              src={item.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
