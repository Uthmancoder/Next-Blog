"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link"; // Import the Link component
import { useEffect } from "react"; // Don't forget to import useEffect
import Image from "next/image";

const Page = () => {
  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `api/posts?.username=${session?.data.user.name}`,
    fetcher
  );
  console.log(data);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      // Redirect to login page if not authenticated
      window.location.href = "/dashboard/login"; // Use window.location.href for navigation
    }
  }, [session.status]);

  const  handleSubmit = async(ev) =>{
    ev.preventDefault()
    const title = ev.target[0].value;
    const description = ev.target[1].value;
    const image = ev.target[2].value;
    const content = ev.target[3].value;

    try {
       await fetch ("/api/post", {
        method : "POST",
        body : JSON.stringify({
          title,description ,image, content
        })

       })
       mutate()
       ev.target.reset()
    } catch (error) {
      console.log(error);
    }
  }


  const handledelete = async()=>{
    try {
      await fetch(`/api/posts/${id}`, {
        method : "DELETE",
      })
      mutate()
    } catch (error) {
      console.log(error);
    }
  }

  if (session.status === "loading") {
    return <p>Loading...</p>;
  } else if (session.status === "authenticated") {
    return (
      <div>
        <div className="container">
          {isLoading ? "loading" : data.map((items) => (
            <div key={items._id} className="posts">
              <div className="image-container">
                <Image src={items.image} alt="image" />
              </div>
              <h2 className="postTitle">{items.title}</h2>
              <button onClick={()=>handledelete(post._id)} className="deletepost">x</button>
            </div>
          ))}
        </div>

        <form action="" onSubmit={handleSubmit}>
          <h1>Add NEW POST</h1>
          <input type="text"  placeholder="Title" />
          <input type="text"  placeholder="Description" />
          <input type="text" placeholder="Image" />
          <textarea name="content" id="content" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    );
  }

  // Handle other cases (e.g., error)

  return null;
};

export default Page;
