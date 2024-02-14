import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders page title', () => {
	render(<App />);
	const heading = screen.getByRole('heading', { level: 1 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/test drive/i);
});
