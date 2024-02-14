export function Button({ children, className, size, ...props }) {
	return size === 'large' && className ? (
		<button
			className={`px-3 py-1.5 border rounded-sm border-indigo-400 ${className}`}
			{...props}
		>
			{children}
		</button>
	) : size === 'large' ? (
		<button
			className="px-3 py-1.5 border rounded-sm border-indigo-400"
			{...props}
		>
			{children}
		</button>
	) : size === 'small' && className ? (
		<button
			className={`px-1 py-0.5 border rounded-sm border-indigo-400 ${className}`}
			{...props}
		>
			{children}
		</button>
	) : size === 'small' ? (
		<button
			className="px-1 py-0.5 border rounded-sm border-indigo-400"
			{...props}
		>
			{children}
		</button>
	) : className ? (
		<button
			className={`px-2 py-1 border rounded-sm border-indigo-400 ${className}`}
			{...props}
		>
			{children}
		</button>
	) : (
		<button
			className="px-2 py-1 border rounded-sm border-indigo-400"
			{...props}
		>
			{children}
		</button>
	);
}
