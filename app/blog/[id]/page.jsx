import Image from "next/image";
import React from "react";
import user from "../../../public/user.png";
import Link from "next/link";
import Business from "../../../public/Business 2.png";
import {notFound} from "next/navigation"

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/allpost/${id}`, {
    cache: "no-store",
  })
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}


export async function generateMetadata ({ params }) {
  const post =  await getData(params.id)
  return {
    title: post.title,
    description : post.description
  }
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="max-w-[1100px] mx-auto ">
      <div className="grid md:grid-cols-3 my-4 gap-8">
        <div className="mt-4 md:col-span-2">
          {/* title */}
          <h1 className="text-xl md:text-4xl font-bold">{data.title}</h1>

          {/* content */}
          <p className="text-md my-5">{data.Content}</p>
          {/* author */}
          <div className="flex items-enter">
            <Image width={500} height={500} className="w-[30px] h-[30px]" src={data.image} />
            <p className="font-bold ml-2">{data.author}</p>
          </div>
        </div>
        <Link href={`/blog/${params.id}`}>
          <Image width={500} height={500} src={data.image} />
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
