export default function H1({ className, children, ...props }) {
	return (
		<h1
			{...props}
			className={`text-4xl font-bold text-center${
				className ? ' ' + className : ''
			}`}
		>
			{children}
		</h1>
	);
}
