import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Controlled from './Controlled';

test('Renders page title', () => {
	render(
		<BrowserRouter>
			<Controlled />
		</BrowserRouter>
	);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/controlled tour/i);
});
