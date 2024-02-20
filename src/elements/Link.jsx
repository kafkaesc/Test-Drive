import { Link as RLink } from 'react-router-dom';

export default function Link({ children, className, to, ...props }) {
	return (
		<RLink
			{...props}
			className={`text-indigo-700 hover:underline${
				className ? ' ' + className : ''
			}`}
			to={to}
		>
			{children}
		</RLink>
	);
}
