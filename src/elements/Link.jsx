import { Link as RLink } from 'react-router-dom';

export default function Link({ children, className, to, ...props }) {
	return className ? (
		<RLink {...props} className={`text-indigo-700 hover:underline`} to={to}>
			{children}
		</RLink>
	) : (
		<RLink {...props} className="text-indigo-700 hover:underline" to={to}>
			{children}
		</RLink>
	);
}
