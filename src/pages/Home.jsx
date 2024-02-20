import Link from '../elements/Link';

export default function Home() {
	return (
		<>
			<h1 className="mb-2 font-bold text-center text-7xl">Test Drive</h1>
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
