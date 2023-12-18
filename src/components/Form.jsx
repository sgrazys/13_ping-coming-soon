function Form() {
	return (
		<div className='container form'>
			<form>
				<input className='input-email' type='email' name='email' placeholder='Your email adress...' id='email' />
				{/* <p className='err-msg'>
				<em>ERROR</em>
			</p> */}
				<button className='btn'>Notify Me</button>
			</form>
		</div>
	);
}

export default Form;
