import React from 'react'
import PostCard from './PostCard'

const PostList = ({posts}) => {
	return (
		<div style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
			{
				posts.map(post => (
					<PostCard key={post._id} post={post} />
				))
			}
		</div>
	)
}

export default PostList