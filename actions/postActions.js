"use server"

import connectDB from "@/database/cnx"
import Post from "@/models/postModel"

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
		
	} catch (error) {
		throw new Error(error.message || "Failed to create post!")
	}
}

