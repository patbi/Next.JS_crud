import { getAllPosts } from '@/actions/postActions'
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import React from 'react'

const Home = async () => {
  /*console.log(process.env.MONGODB_URI)*/
  const { posts } = await getAllPosts();
  return (
    <div>
      <h1>NextJS 13.4 Server Actions + MongoDB (mongoose)</h1>
      <h2>crud + sort + search + pagination</h2>

      <PostForm />

      { posts && <PostList posts={posts} />}

    </div>
    )
}

export default Home;