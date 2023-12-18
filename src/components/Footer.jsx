import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
	return (
		<footer>
			<div className='icons'>
				<a href='https://www.facebook.com/'>
					<FaFacebookF className='icon' />
				</a>

				<a href='https://www.twitter.com/'>
					<FaTwitter className='icon' />
				</a>
				<a href='https://www.instagram.com/'>
					<FaInstagram className='icon' />
				</a>
			</div>
			<p className='copy'>&copy; Copyright Ping. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
