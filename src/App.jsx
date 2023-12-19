import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<div>
			<Header />

			<div className='container img'>
				<img
					className='img-dashboard'
					src='/images/illustration-dashboard.png'
					alt=''
				/>
			</div>

			<Footer />
		</div>
	);
}

export default App;
