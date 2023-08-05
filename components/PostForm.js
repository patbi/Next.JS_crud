"use client"
import { createPost } from '@/actions/postActions'
import React, { useRef } from 'react'
import ButtonSubmit from './ButtonSubmit';

const PostForm = () => {
	const formRef = useRef();
	

	async function handleAction(formData){
		/*"use server"*/
		const title = formData.get('title')
		const image = formData.get('image')

		// console.log({"server action": {title, image}})
		// console.log({"client action": {title, image}})
		await createPost({title, image})

		formRef.current.reset();
	}

	return(
		<form action={handleAction}
		 style={{display: 'flex', gap: 20, margin: '30px 0'}}
		 ref={formRef} >
			<input type="text" name="title" placeholder='title' required />

			<input type="text" name="image" placeholder='image' required />

			<ButtonSubmit value="create"/>
		</form>
	)
}

export default PostForm;