import H1 from '../elements/H1';
import Link from '../elements/Link';
import ContentColumn from '../components/ContentColumn';
import ControlledTour from '../tours/ControlledTour';

export default function Controlled() {
	return (
		<ContentColumn>
			<H1 className="mb-2">Controlled Tour</H1>
			<div className="mb-2">
				<ControlledTour />
			</div>
			<div className="text-center">
				<Link to="/">Home</Link>
			</div>
		</ContentColumn>
	);
}
