"use server"

import connectDB from "@/database/cnx"
import Post from "@/models/postModel"
import { revalidatePath } from "next/cache";

connectDB();

export async function getAllPosts() {
	try {
		const posts = await Post.find();
		//console.log(posts)

		const newData = posts.map(post =>(
			{
				...post._doc,
				_id: post._doc._id.toString()
			}
		))

		console.log(newData)

		//return {posts};		
		return { posts: newData };		
	} catch (error) {
		throw new Error(error.message || "Failed to create post!")
	}
}

export async function createPost(data) {
	//console.log(data)
	try {
		const newPost = new Post(data);
		await newPost.save();
		console.log(data)
		//return {...newPost.doc, _id: newPost._id.toString()};		
		revalidatePath("/")

	} catch (error) {
		throw new Error(error.message || "Failed to create post!")
	}
}

export async function updatePost({title, image, id}) {
	//console.log(data)
	try {
		const post = await Post.findByIdAndUpdate(id, {title, image}, {new: true})
		// await newPost.save();
		console.log(post)
		revalidatePath("/")
		
		return {...post.doc, _id: post._id.toString()};
		

	} catch (error) {
		throw new Error(error.message || "Failed to fetch posts!")
	}
}

