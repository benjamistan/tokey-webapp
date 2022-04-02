import React, { Component } from 'react';

import CollectionSelect from './CollectionSelect';

const Form = () => {
	return (
		<div className='flex justify-center w-2/5 p-10'>
			<form className='w-3/5 text-left'>
				<div>
					<label
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						htmlFor='NFT file'
					>
						Upload file
					</label>
					<input
						className='block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
						aria-describedby='user_avatar_help'
						id='user_avatar'
						type='file'
					/>
				</div>
				<div className='my-6'>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Name
					</label>
					<input
						type='email'
						id='email'
						className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-tblue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-tblue dark:shadow-sm-light'
						placeholder='name@flowbite.com'
						required
					/>
				</div>
				<div className='my-6'>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Description
					</label>
					<input
						type='NFT description'
						id='description'
						className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-tblue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-tblue dark:shadow-sm-light'
						required
					/>
				</div>

				<div className='flex items-start mb-6'>
					<div className='flex items-center h-5'>
						<input
							id='terms'
							aria-describedby='terms'
							type='checkbox'
							className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
							required
						/>
					</div>
					<div className='ml-3 text-sm'>
						<label
							htmlFor='terms'
							className='font-medium text-gray-900 dark:text-gray-300'
						>
							I agree with the{' '}
							<a
								href='#'
								className='text-tred hover:text-tpink dark:text-blue-500'
							>
								terms and conditions
							</a>
						</label>
					</div>
				</div>
				<button
					type='submit'
					className='text-white bg-tred hover:bg-tpink focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Create NFT
				</button>
			</form>
			<div className='grid grid-cols-1 gap-4 place-content-center text-xl ml-10 border-2 border-tlightblue w-2/5 text-tlightblue'>
				Image goes here
			</div>
		</div>
	);
};

export default Form;
