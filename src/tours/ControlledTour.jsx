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

export default function ControlledTour() {
	return (
		<div>
			<Expander buttonText="Show Foundation Books">
				{foundationTrilogy.map((book) => {
					return (
						<OneThreeColumn className="p-1">
							<UiCard className="text-center">
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
