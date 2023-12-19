import { useEffect, useState } from 'react';

function Form() {
	const [email, setEmail] = useState('');
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [errMsg, setErrMsg] = useState('');

	const invalidSymbols = [' ', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '\\', '?', '/'];

	function handleSubmit() {
		const emailCharArr = email.split('');
		const emailDomain = email.slice(emailCharArr.indexOf('@'));
		const emailUserName = email.slice(0, emailCharArr.indexOf('@'));

		if (email.length === 0) {
			setIsValidEmail(false);
			setErrMsg('Whoops! It looks like you forgot to add your email');

			setEmail('');
			return;
		}

		if (emailCharArr.some((char) => invalidSymbols.includes(char)) || !email.includes('@') || !emailDomain.includes('.') || emailUserName.length < 2) {
			setIsValidEmail(false);
			setErrMsg('Please provide a valid email address');

			setEmail('');
		}

		setEmail('');
	}

	useEffect(() => {
		if (!isValidEmail) {
			const resetValues = setTimeout(() => {
				setIsValidEmail(true);
				setErrMsg('');
			}, 3000);

			return () => clearTimeout(resetValues);
		}
	}, [isValidEmail, errMsg]);

	return (
		<div className='container form'>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					onChange={(e) => setEmail(e.target.value)}
					className='input-email'
					type='text'
					name='email'
					placeholder='Your email adress...'
					id='email'
					value={email}
				/>
				{!isValidEmail ? (
					<p className='err-msg'>
						<em>{errMsg}</em>
					</p>
				) : null}

				<button
					onClick={handleSubmit}
					className='btn'>
					Notify Me
				</button>
			</form>
		</div>
	);
}

export default Form;
