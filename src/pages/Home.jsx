import Link from '../elements/Link';

export default function Home() {
	return (
		<>
			<h1 className="text-7xl font-bold text-center mb-2">Test Drive</h1>
			<div className="text-center">
				<Link to="/button-start-continuous">
					Button Start into a Continuous Tour
				</Link>
				{` — `}
				<Link to="/controlled">Controlled</Link>
			</div>
		</>
	);
}
