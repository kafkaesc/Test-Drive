import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('Renders page title', () => {
	render(
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/test drive/i);
});
