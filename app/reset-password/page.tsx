'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
	email: string;
	emailRequired: string;
	password: string;
	passwordRequired: string;
};

const ResetPassword: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div className='flex items-center justify-center px-4 py-24 md:p-24 lg:p-30 2xl:p-40'>
			<div className='flex flex-col gap-14 w-[640px]'>
				<h1 className='xl:text-5xl text-[32px] font-bold font-orbitron text-center'>
					Reset Password
				</h1>
				<p className='text-xl text-center'>
					Enter the email address you used to sign up. We'll email you
					a link to reset your password. If it doesn't appear in your
					inbox, be sure to check your spam folder. In case of any
					complications, please contact us
				</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-3'
				>
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
					<button
						type='submit'
						className='p-4 text-2xl duration-500 rounded-2xl bg-orange text-light mt-9 hover:opacity-80 active:opacity-60'
					>
						Send email
					</button>
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
