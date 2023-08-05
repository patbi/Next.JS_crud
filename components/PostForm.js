"use client"
import { createPost, updatePost } from '@/actions/postActions'
import React, { useRef } from 'react'
import ButtonSubmit from './ButtonSubmit';
import { useMyContext } from '@/context/Provider'

const PostForm = () => {
	const formRef = useRef();
	const { editPost, setEditPost } = useMyContext();
	

	async function handleAction(formData){
		/*"use server"*/
		const title = formData.get('title')
		const image = formData.get('image')

		if(editPost){
			// console.log({title, image, id: editPost._id})
			await updatePost({title, image, id: editPost._id})
		}else {
			await createPost({title, image})
		}

		// console.log({"server action": {title, image}})
		// console.log({"client action": {title, image}})
		setEditPost();		
		formRef.current.reset();
	}

	return(
		<form action={handleAction}
		 style={{display: 'flex', gap: 20, margin: '30px 0'}}
		 ref={formRef} >
			<input 
				type="text" 
				name="title" 
				placeholder='title' 
				required 
				defaultValue={editPost?.title}
			/>

			<input 
				type="text" 
				name="image" 
				placeholder='image' 
				required 
				defaultValue={editPost?.image}
			/>

			{
				editPost
				? 
				<>
					<ButtonSubmit value="Update" />
					<button 
						type="button" 
						onClick={() => setEditPost()}
					>Cancel</button>
				</>
				: 
					<ButtonSubmit value="create"/>
			}
		</form>
	)
}

export default PostForm;