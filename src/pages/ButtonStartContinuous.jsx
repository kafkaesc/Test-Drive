import H1 from '../elements/H1';
import Link from '../elements/Link';
import ButtonStartContinuousTour from '../tours/ButtonStartContinuousTour';

export default function ButtonStartContinuous() {
	return (
		<div>
			<H1 className="mb-2">Button Start into a Continuous Tour</H1>
			<div className="mb-2">
				<ButtonStartContinuousTour />
			</div>
			<div className="text-center">
				<Link to="/">Home</Link>
			</div>
		</div>
	);
}
