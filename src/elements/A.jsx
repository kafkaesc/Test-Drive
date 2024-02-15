export default function A({ className, children, href, ...props }) {
	return className ? (
		<a
			{...props}
			className={`text-indigo-700 hover:underline ${className}`}
			href={href}
		>
			{children}
		</a>
	) : (
		<a {...props} className="text-indigo-700 hover:underline" href={href}>
			{children}
		</a>
	);
}
