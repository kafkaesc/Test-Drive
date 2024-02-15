import Link from '../elements/Link';

export default function Home() {
	return (
		<>
			<h1 className="text-7xl font-bold text-center mb-2">Test Drive</h1>
			<Link to="/button-start-continuous">
				Button Start into a Continuous Tour
			</Link>
		</>
	);
}
