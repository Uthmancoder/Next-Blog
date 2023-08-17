import postmodels from "@/Models/postmodels";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
   const { id } = params;
   
   try {
       await connect();

       const post = await postmodels.findById(id);

       if (!post) {
           return new NextResponse("Post not found", { status: 404 });
       }

       return new NextResponse(JSON.stringify(post), { status: 200 });
   } catch (error) {
       console.error("Error in GET:", error);
       return new NextResponse("Internal Server Error", { status: 500 });
   }
};


export const DELETE = async (request, { params }) => {
   const { id } = params;
   
   try {
       await connect();

       await postmodels.findById(id);

       if (!post) {
           return new NextResponse("Post not found", { status: 404 });
       }

       return new NextResponse("post deleted sucessfully", { status: 200 });
   } catch (error) {
       console.error("Error in GET:", error);
       return new NextResponse("Internal Server Error", { status: 500 });
   }
};

