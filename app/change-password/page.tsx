'use client';

import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
	password: string;
	passwordRequired: string;
	confirmPassword: string;
	confirmPasswordRequired: string;
};

const ChangePassword: React.FC = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const toggleConfirmPasswordVisibility = () => {
		setConfirmPasswordVisible(!confirmPasswordVisible);
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div className='flex items-center justify-center px-4 py-24 md:p-24 lg:p-30 2xl:p-40'>
			<div className='flex flex-col gap-14 w-[640px]'>
				<h1 className='xl:text-5xl text-[32px] font-bold font-orbitron text-center'>
					Change your password
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-3'
				>
					<div className='relative flex flex-col gap-3'>
						<label htmlFor='password'>New password</label>
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
								<span className='text-red-500 '>
									{errors.password.message}
								</span>
							)}
						</div>
					</div>
					<div className='relative flex flex-col gap-3'>
						<label htmlFor='confirmPassword'>
							Confirm password
						</label>
						<input
							className='p-2 font-medium duration-500 border-4 rounded-lg outline-none bg-light text-light-gray border-light focus:border-blue'
							placeholder='Confirm your password'
							type={confirmPasswordVisible ? 'text' : 'password'}
							{...register('confirmPassword', {
								required: 'Password confirmation required',
								minLength: {
									value: 8,
									message:
										'Password must be at least 8 characters',
								},
								validate: (value) =>
									value === watch('password') ||
									'Passwords do not match',
							})}
						/>
						<button
							type='button'
							className='absolute text-light-gray right-3 top-12'
							onClick={toggleConfirmPasswordVisibility}
						>
							{confirmPasswordVisible ? (
								<BsFillEyeSlashFill size={24} />
							) : (
								<BsFillEyeFill size={24} />
							)}
						</button>
						<div className='h-5'>
							{errors.confirmPassword && (
								<span className='text-red-500 '>
									{errors.confirmPassword.message}
								</span>
							)}
						</div>
					</div>
					<button
						type='submit'
						className='p-4 text-2xl duration-500 rounded-2xl bg-orange text-light mt-9 hover:opacity-80 active:opacity-60'
					>
						Log in
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChangePassword;
