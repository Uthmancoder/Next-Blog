import PostsModel from "@/Models/postmodels"
import postmodels from "@/Models/postmodels"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import { stringify } from "postcss"

export const GET = async (request)=>{
   const url = new URL(request.url)

   const username = url.searchParams.get("username");
   try {
      await connect()


      const post = await postmodels.find(username && {username})

      return new NextResponse(JSON.stringify(post), {status : 200})
   } catch (err) {
    return new NextResponse(err, {status : 500})
   } 
}


export const POST = async (request)=>{
   const body =  await  request.JSON()

   const newPost = await PostsModel(body)
   try {
      await connect()

      await newPost.save()
      const post = await postmodels.find(username && {username})

      return new NextResponse("post created successfully", {status : 201})
   } catch (err) {
    return new NextResponse(err, {status : 500})
   } 
}