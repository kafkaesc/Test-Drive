import { useState } from 'react';
import Joyride, { STATUS as JOYRIDE_STATUS } from 'react-joyride';
import A from '../elements/A';
import UiCard from '../components/UiCard';
import Expander from '../components/Expander';
import OneThreeColumn from '../components/OneThreeColumn';

const foundationTrilogy = [
	{
		author: 'Isaac Asimov',
		goodreadsUrl: 'https://www.goodreads.com/en/book/show/29579',
		title: 'The Foundation',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)',
	},
	{
		author: 'Isaac Asimov',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/29581.Foundation_and_Empire',
		title: 'Foundation & Empire',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/Foundation_and_Empire',
	},
	{
		author: 'Isaac Asimov',
		goodreadsUrl: 'https://www.goodreads.com/book/show/29580.Second_Foundation',
		title: 'Second Foundation',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/Second_Foundation',
	},
];

const state = {
	disableScrollParentFix: true,
	run: true,
	//stepIndex: 0,
	steps: [
		{
			content: 'Expand the menu to see the books',
			target: '.controlled-step-0',
		},
		{
			content: 'The first book is Foundation',
			target: '.controlled-step-1',
		},
		{
			content: 'The second book is Foundation & Empire',
			target: '.controlled-step-2',
		},
		{
			content: 'The third book is Second Foundation',
			target: '.controlled-step-3',
		},
	],
};

export default function ControlledTour() {
	const [tourState, setTourState] = useState(state);

	const handleTourCallback = (data) => {
		const { action, index, status, type } = data;
		/*setTourState((prev) => {
			return { ...prev, stepIndex: prev.stepIndex + 1 };
		});*/
	};

	return (
		<div>
			<Joyride callback={handleTourCallback} {...tourState} />
			<Expander
				buttonText="Show Foundation Books"
				className="controlled-step-0"
			>
				{foundationTrilogy.map((book, index) => {
					return (
						<OneThreeColumn
							className="p-1"
							key={book.title + '-' + book.author}
						>
							<UiCard
								className={`text-center${' controlled-step-' + (index + 1)}`}
							>
								<h2 className="text-xl font-bold">{book.title}</h2>
								<div>by {book.author}</div>
								<div>
									<A href={book.goodreadsUrl}>Goodreads</A>
									{` - `}
									<A href={book.wikipediaUrl}>Wikipedia</A>
								</div>
							</UiCard>
						</OneThreeColumn>
					);
				})}
			</Expander>
		</div>
	);
}
