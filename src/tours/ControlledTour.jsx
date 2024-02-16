import Expander from '../components/Expander';

export default function ControlledTour() {
	return (
		<div>
			<Expander buttonText="Show Foundation Books">
				<ul>
					<li>Foundation</li>
					<li>Foundation & Empire</li>
					<li>Second Foundation</li>
				</ul>
			</Expander>
		</div>
	);
}
