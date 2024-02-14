import { useState } from 'react';
import Joyride, { STATUS } from 'react-joyride';
import { Button } from './elements/Button';
import './App.css';
import './output.css';

const state = {
	continuous: true,
	run: false,
	steps: [
		{
			target: '.my-00-step',
			content: 'Initializing the tour',
			placement: 'center',
		},
		{
			target: '.my-01-step',
			content:
				'Step One: The journey of a thousand miles starts with the *first step*',
		},
		{
			target: '.my-02-step',
			content: "Step Two: you're moving forward and making progress",
		},
		{
			target: '.my-03-step',
			content: "Step Three: Look at how far you've come",
		},
		{
			target: '.my-04-step',
			content: 'Step Four: You have reached your *final destination*',
		},
	],
};

function App() {
	const [tourState, setTourState] = useState(state);

	const handleTourCallback = (data) => {
		const { status } = data;
		const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

		if (finishedStatuses.includes(status)) {
			setTourState((prev) => {
				return { ...prev, continuous: false, run: false };
			});
		}
	};

	const logTourState = () => {
		console.log('tourState: ', tourState);
	};

	const startTour = () => {
		setTourState((prev) => {
			return { ...prev, continuous: true, run: true };
		});
	};

	return (
		<div className="App">
			<h1 className="text-3xl font-bold text-center mb-2">Test Drive</h1>
			<div className="text-center">
				<Joyride callback={handleTourCallback} {...tourState} />
				<Button className="my-00-step mx-1" onClick={startTour} size="large">
					Start Tour
				</Button>
				<Button className="my-01-step mx-1" size="large">
					Step 1
				</Button>
				<Button className="my-02-step mx-1" size="large">
					Step 2
				</Button>
				<Button className="my-03-step mx-1" size="large">
					Step 3
				</Button>
				<Button className="my-04-step mx-1" size="large">
					Step 4
				</Button>
				<Button className="mx-1" onClick={logTourState} size="large">
					log
				</Button>
			</div>
		</div>
	);
}

export default App;
