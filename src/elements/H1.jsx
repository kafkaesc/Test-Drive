export default function H1({ className, children, ...props }) {
	return className ? (
		<h1 {...props} className={`text-4xl font-bold text-center ${className}`}>
			{children}
		</h1>
	) : (
		<h1 {...props} className="text-4xl font-bold text-center">
			{children}
		</h1>
	);
}
