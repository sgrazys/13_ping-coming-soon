import Form from './Form';

function Header() {
	return (
		<header>
			<img className='logo' src='/images/logo.svg' alt='Logo' />
			<p className='description'>
				We are launching <span>soon!</span>
			</p>
			<p className='subscribe-msg'>Subscribe and get notified</p>
			<Form />
		</header>
	);
}

export default Header;
