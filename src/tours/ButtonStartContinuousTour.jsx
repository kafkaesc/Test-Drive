import { useState } from 'react';
import Joyride, { STATUS as JOYRIDE_STATUS } from 'react-joyride';
import Button from '../elements/Button';

const state = {
	continuous: true,
	run: false,
	steps: [
		{
			content: 'Initializing the tour',
			placement: 'center',
			target: '.my-00-step',
		},
		{
			content:
				'Step One: The journey of a thousand miles starts with the *first step*',
			target: '.my-01-step',
		},
		{
			content: "Step Two: you're moving forward and making progress",
			target: '.my-02-step',
		},
		{
			content: "Step Three: Look at how far you've come",
			target: '.my-03-step',
		},
		{
			content: 'Step Four: You have reached your *final destination*',
			target: '.my-04-step',
		},
	],
};

export default function ButtonStartContinuousTour() {
	const [tourState, setTourState] = useState(state);

	const handleTourCallback = (data) => {
		const { status } = data;
		const finishedStatuses = [JOYRIDE_STATUS.FINISHED, JOYRIDE_STATUS.SKIPPED];

		if (finishedStatuses.includes(status)) {
			setTourState((prev) => {
				return { ...prev, continuous: false, run: false };
			});
		}
	};

	const startTour = () => {
		setTourState((prev) => {
			return { ...prev, continuous: true, run: true };
		});
	};

	return (
		<div className="text-center">
			<Joyride callback={handleTourCallback} {...tourState} />
			<Button className="mx-1 my-00-step" onClick={startTour}>
				Start Tour
			</Button>
			<Button className="mx-1 my-01-step">Step 1</Button>
			<Button className="mx-1 my-02-step">Step 2</Button>
			<Button className="mx-1 my-03-step">Step 3</Button>
			<Button className="mx-1 my-04-step">Step 4</Button>
		</div>
	);
}
