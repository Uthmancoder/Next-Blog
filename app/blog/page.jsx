import React from "react";
import Button from "@/components/Buttton/Button";
import Image from "next/image";
import Business from "../../public/Application.jpg";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/allpost", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <div className="max-w-[1100px] mx-auto pt-3">
      <h1 className="text-white">
        <div>
          {data.map((items) => (
            <Link
              href={`/blog/${items._id}`}
              key={items.id}
              className="grid md:grid-cols-3 my-6 gap-8"
            >
              <Image width={500} height={500} className="" src={items.image} />

              <div className="mt-4 md:col-span-2">
                <h1 className="text-xl md:text-3xl font-bold">{items.title}</h1>
                <p className="text-md  my-5">{items.Content}</p>
              </div>
            </Link>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default page;
