'use client';

import Link from 'next/link';
import {
	BsApple,
	BsCheck,
	BsDiscord,
	BsFacebook,
	BsFillEyeFill,
	BsFillEyeSlashFill,
	BsGoogle,
} from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
	name: string;
	nameRequired: string;
	email: string;
	emailRequired: string;
	password: string;
	passwordRequired: string;
};

const Register: React.FC = () => {
	const [agreeWithTerms, setAgreeWithTerms] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleCheckboxChange = () => {
		setAgreeWithTerms(!agreeWithTerms);
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div className='flex items-center justify-center px-4 py-24 md:p-24 lg:p-30 2xl:p-40'>
			<div className='flex flex-col gap-14 w-[640px]'>
				<div className='flex flex-col gap-8'>
					<h1 className='xl:text-5xl text-[32px] font-bold font-orbitron text-center'>
						Create account
					</h1>
					<div className='flex items-center justify-between gap-6'>
						<BsFacebook className='duration-500 cursor-pointer hover:text-orange md:size-14 size-12' />
						<BsDiscord className='duration-500 cursor-pointer hover:text-orange md:size-14 size-12' />
						<BsGoogle className='duration-500 cursor-pointer hover:text-orange md:size-14 size-12' />
						<BsApple className='duration-500 cursor-pointer hover:text-orange md:size-14 size-12' />
					</div>
					<p className='text-[32px] font-medium text-center'>or</p>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-3'
				>
					<div className='flex flex-col gap-3'>
						<label htmlFor='name'>Your name</label>
						<input
							className='p-2 font-medium duration-500 border-4 rounded-lg outline-none bg-light text-light-gray border-light focus:border-blue'
							placeholder='Enter your name'
							type='text'
							{...register('name', {
								required: 'Name is required',
								minLength: {
									value: 4,
									message:
										'Name must be at least 4 characters',
								},
							})}
						/>
						<div className='h-5'>
							{errors.name && (
								<span className='text-red-500'>
									{errors.name.message}
								</span>
							)}
						</div>
					</div>
					<label htmlFor='email'>Email</label>
					<input
						className='p-2 font-medium duration-500 border-4 rounded-lg outline-none bg-light text-light-gray border-light focus:border-blue'
						placeholder='Enter your email'
						type='email'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						})}
					/>
					<div className='h-5'>
						{errors.email && (
							<span className='text-red-500 '>
								{errors.email.message}
							</span>
						)}
					</div>
					<div className='relative flex flex-col gap-3'>
						<label htmlFor='password'>Password</label>
						<input
							className='p-2 font-medium duration-500 border-4 rounded-lg outline-none bg-light text-light-gray border-light focus:border-blue'
							placeholder='Enter your password'
							type={passwordVisible ? 'text' : 'password'}
							{...register('password', {
								required: 'Password is required',
								minLength: {
									value: 8,
									message:
										'Password must be at least 8 characters',
								},
							})}
						/>
						<button
							type='button'
							className='absolute text-light-gray right-3 top-12'
							onClick={togglePasswordVisibility}
						>
							{passwordVisible ? (
								<BsFillEyeSlashFill size={24} />
							) : (
								<BsFillEyeFill size={24} />
							)}
						</button>
						<div className='h-5'>
							{errors.password && (
								<span className='text-red-500'>
									{errors.password.message}
								</span>
							)}
						</div>
					</div>
					<div className='flex items-center gap-3'>
						<div
							className='flex items-center justify-center duration-500 border border-white rounded-sm cursor-pointer size-5'
							onClick={handleCheckboxChange}
						>
							{agreeWithTerms && (
								<BsCheck size={24} className='text-light' />
							)}
						</div>
						<span className='text-light'>
							I agree with{' '}
							<a
								href='/'
								target='_blank'
								className='duration-500 text-light-blue hover:text-blue'
							>
								Terms
							</a>{' '}
							and{' '}
							<a
								href='/'
								target='_blank'
								className='duration-500 text-light-blue hover:text-blue'
							>
								Privacy policy
							</a>
						</span>
					</div>
					<div className='flex flex-col items-center justify-between gap-3 mt-9 md:flex-row'>
						<button
							type='submit'
							className='p-4 text-2xl duration-500 rounded-2xl bg-orange text-light hover:opacity-80 active:opacity-60 md:w-[296px] w-full'
						>
							Log in
						</button>
						<Link
							href='/login'
							className='px-6 py-2 text-xl duration-500 text-light hover:text-orange'
						>
							Already have account
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
