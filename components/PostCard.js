import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({post}) => {
	return (
		<Link href="/">
			<Image src={post?.image} alt='image' width={200} height={200} priority />
		</Link>
	)
}

export default PostCard