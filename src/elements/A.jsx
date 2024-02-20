export default function A({ className, children, href, ...props }) {
	return (
		<a
			{...props}
			className={`text-indigo-700 hover:underline${
				className ? ' ' + className : ''
			}`}
			href={href}
		>
			{children}
		</a>
	);
}
